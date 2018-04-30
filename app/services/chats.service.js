"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var apollo_angular_1 = require("apollo-angular");
var core_1 = require("@angular/core");
var getChats_query_1 = require("~/graphql/getChats.query");
var getChat_query_1 = require("~/graphql/getChat.query");
var addMessage_mutation_1 = require("~/graphql/addMessage.mutation");
var removeChat_mutation_1 = require("~/graphql/removeChat.mutation");
var removeAllMessages_mutation_1 = require("~/graphql/removeAllMessages.mutation");
var removeMessages_mutation_1 = require("~/graphql/removeMessages.mutation");
var getUsers_query_1 = require("~/graphql/getUsers.query");
var addChat_mutation_1 = require("~/graphql/addChat.mutation");
var addGroup_mutation_1 = require("~/graphql/addGroup.mutation");
var AsyncSubject_1 = require("rxjs/AsyncSubject");
var of_1 = require("rxjs/observable/of");
var chatAdded_subscription_1 = require("~/graphql/chatAdded.subscription");
var messageAdded_subscription_1 = require("~/graphql/messageAdded.subscription");
var login_service_1 = require("~/login/services/login.service");
var ChatsService = /** @class */ (function () {
    function ChatsService(apollo, loginService) {
        var _this = this;
        this.apollo = apollo;
        this.loginService = loginService;
        this.messagesAmount = 3;
        this.getChatsWq = this.apollo.watchQuery({
            query: getChats_query_1.getChatsQuery,
            variables: {
                amount: this.messagesAmount,
            },
        });
        this.getChatsWq.subscribeToMore({
            document: chatAdded_subscription_1.chatAddedSubscription,
            updateQuery: function (prev, _a) {
                var subscriptionData = _a.subscriptionData;
                if (!subscriptionData.data) {
                    return prev;
                }
                var newChat = subscriptionData.data.chatAdded;
                return Object.assign({}, prev, {
                    chats: tslib_1.__spread(prev.chats, [newChat])
                });
            }
        });
        this.getChatsWq.subscribeToMore({
            document: messageAdded_subscription_1.messageAddedSubscription,
            updateQuery: function (prev, _a) {
                var subscriptionData = _a.subscriptionData;
                if (!subscriptionData.data) {
                    return prev;
                }
                var newMessage = subscriptionData.data.messageAdded;
                // We need to update the cache for both Chat and Chats. The following updates the cache for Chat.
                try {
                    // Read the data from our cache for this query.
                    var chat = _this.apollo.getClient().readQuery({
                        query: getChat_query_1.getChatQuery, variables: {
                            chatId: newMessage.chat.id,
                        }
                    }).chat;
                    // Add our message from the mutation to the end.
                    chat.messages.push(newMessage);
                    // Write our data back to the cache.
                    _this.apollo.getClient().writeQuery({ query: getChat_query_1.getChatQuery, data: { chat: chat } });
                }
                catch (_b) {
                    console.error('The chat we received an update for does not exist in the store');
                }
                return Object.assign({}, prev, {
                    chats: tslib_1.__spread(prev.chats.map(function (_chat) {
                        return _chat.id === newMessage.chat.id ? tslib_1.__assign({}, _chat, { messages: tslib_1.__spread(_chat.messages, [newMessage]) }) : _chat;
                    }))
                });
            }
        });
        this.chats$ = this.getChatsWq.valueChanges.pipe(operators_1.map(function (result) { return result.data.chats; }));
        this.chats$.subscribe(function (chats) { return _this.chats = chats; });
    }
    ChatsService.getRandomId = function () {
        return String(Math.round(Math.random() * 1000000000000));
    };
    ChatsService.prototype.getChats = function () {
        return { query: this.getChatsWq, chats$: this.chats$ };
    };
    ChatsService.prototype.getChat = function (chatId, oui) {
        var _this = this;
        var _chat = this.chats && this.chats.find(function (chat) { return chat.id === chatId; }) || {
            id: chatId,
            name: '',
            picture: null,
            allTimeMembers: [],
            unreadMessages: 0,
            isGroup: false,
            messages: [],
        };
        var chat$FromCache = of_1.of(_chat);
        var getApolloWatchQuery = function (id) {
            return _this.apollo.watchQuery({
                query: getChat_query_1.getChatQuery,
                variables: {
                    chatId: id,
                }
            });
        };
        var chat$;
        this.getChatWqSubject = new AsyncSubject_1.AsyncSubject();
        if (oui) {
            chat$ = chat$FromCache.pipe(operators_1.concat(this.addChat$.pipe(operators_1.switchMap(function (_a) {
                var _b = _a.data, addChat = _b.addChat, addGroup = _b.addGroup;
                var query = getApolloWatchQuery(addChat ? addChat.id : addGroup.id);
                _this.getChatWqSubject.next(query);
                _this.getChatWqSubject.complete();
                return query.valueChanges.pipe(operators_1.map(function (result) { return result.data.chat; }));
            }))));
        }
        else {
            var query = getApolloWatchQuery(chatId);
            this.getChatWqSubject.next(query);
            this.getChatWqSubject.complete();
            chat$ = chat$FromCache.pipe(operators_1.concat(query.valueChanges.pipe(operators_1.map(function (result) { return result.data.chat; }))));
        }
        return { query$: this.getChatWqSubject.asObservable(), chat$: chat$ };
    };
    ChatsService.prototype.addMessage = function (chatId, content) {
        var _this = this;
        return this.apollo.mutate({
            mutation: addMessage_mutation_1.addMessageMutation,
            variables: {
                chatId: chatId,
                content: content,
            },
            /*optimisticResponse: {
              __typename: 'Mutation',
              addMessage: {
                id: ChatsService.getRandomId(),
                __typename: 'Message',
                senderId: this.loginService.getUser().id,
                sender: {
                  id: this.loginService.getUser().id,
                  __typename: 'User',
                  name: this.loginService.getUser().name,
                },
                content,
                createdAt: moment().unix(),
                type: 0,
                recipients: [],
                ownership: true,
              },
            },*/
            update: function (store, _a) {
                var addMessage = _a.data.addMessage;
                // Update the messages cache
                {
                    // Read the data from our cache for this query.
                    var chat = store.readQuery({
                        query: getChat_query_1.getChatQuery, variables: {
                            chatId: chatId,
                        }
                    }).chat;
                    // Add our message from the mutation to the end.
                    chat.messages.push(addMessage);
                    // Write our data back to the cache.
                    store.writeQuery({ query: getChat_query_1.getChatQuery, data: { chat: chat } });
                }
                // Update last message cache
                {
                    // Read the data from our cache for this query.
                    var chats = store.readQuery({
                        query: getChats_query_1.getChatsQuery,
                        variables: {
                            amount: _this.messagesAmount,
                        },
                    }).chats;
                    // Add our comment from the mutation to the end.
                    chats.find(function (chat) { return chat.id === chatId; }).messages.push(addMessage);
                    // Write our data back to the cache.
                    store.writeQuery({
                        query: getChats_query_1.getChatsQuery,
                        variables: {
                            amount: _this.messagesAmount,
                        },
                        data: {
                            chats: chats,
                        },
                    });
                }
            },
        });
    };
    ChatsService.prototype.removeChat = function (chatId) {
        var _this = this;
        return this.apollo.mutate({
            mutation: removeChat_mutation_1.removeChatMutation,
            variables: {
                chatId: chatId,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                removeChat: chatId,
            },
            update: function (store, _a) {
                var removeChat = _a.data.removeChat;
                // Read the data from our cache for this query.
                var chats = store.readQuery({
                    query: getChats_query_1.getChatsQuery,
                    variables: {
                        amount: _this.messagesAmount,
                    },
                }).chats;
                try {
                    // Remove the chat (mutable)
                    for (var _b = tslib_1.__values(chats.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var index = _c.value;
                        if (chats[index].id === removeChat) {
                            chats.splice(index, 1);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // Write our data back to the cache.
                store.writeQuery({
                    query: getChats_query_1.getChatsQuery,
                    variables: {
                        amount: _this.messagesAmount,
                    },
                    data: {
                        chats: chats,
                    },
                });
                var e_1, _d;
            },
        });
    };
    ChatsService.prototype.removeMessages = function (chatId, messages, messageIdsOrAll) {
        var _this = this;
        var variables;
        var ids = [];
        var mutation;
        if (typeof messageIdsOrAll === 'boolean') {
            variables = { chatId: chatId, all: messageIdsOrAll };
            ids = messages.map(function (message) { return message.id; });
            mutation = removeAllMessages_mutation_1.removeAllMessagesMutation;
        }
        else {
            variables = { chatId: chatId, messageIds: messageIdsOrAll };
            ids = messageIdsOrAll;
            mutation = removeMessages_mutation_1.removeMessagesMutation;
        }
        return this.apollo.mutate({
            mutation: mutation,
            variables: variables,
            optimisticResponse: {
                __typename: 'Mutation',
                removeMessages: ids,
            },
            update: function (store, _a) {
                var removeMessages = _a.data.removeMessages;
                // Update the messages cache
                {
                    // Read the data from our cache for this query.
                    var chat_1 = store.readQuery({
                        query: getChat_query_1.getChatQuery, variables: {
                            chatId: chatId,
                        }
                    }).chat;
                    // Remove the messages (mutable)
                    removeMessages.forEach(function (messageId) {
                        try {
                            for (var _a = tslib_1.__values(chat_1.messages.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                var index = _b.value;
                                if (chat_1.messages[index].id === messageId) {
                                    chat_1.messages.splice(index, 1);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        var e_2, _c;
                    });
                    // Write our data back to the cache.
                    store.writeQuery({ query: getChat_query_1.getChatQuery, data: { chat: chat_1 } });
                }
                // Update last message cache
                {
                    // Read the data from our cache for this query.
                    var chats = store.readQuery({
                        query: getChats_query_1.getChatsQuery,
                        variables: {
                            amount: _this.messagesAmount,
                        },
                    }).chats;
                    // Fix last message
                    chats.find(function (chat) { return chat.id === chatId; }).messages = messages
                        .filter(function (message) { return !ids.includes(message.id); })
                        .sort(function (a, b) { return Number(b.createdAt) - Number(a.createdAt); }) || [];
                    // Write our data back to the cache.
                    store.writeQuery({
                        query: getChats_query_1.getChatsQuery,
                        variables: {
                            amount: _this.messagesAmount,
                        },
                        data: {
                            chats: chats,
                        },
                    });
                }
            },
        });
    };
    ChatsService.prototype.getUsers = function () {
        var query = this.apollo.watchQuery({
            query: getUsers_query_1.getUsersQuery,
        });
        var users$ = query.valueChanges.pipe(operators_1.map(function (result) { return result.data.users; }));
        return { query: query, users$: users$ };
    };
    // Checks if the chat is listed for the current user and returns the id
    ChatsService.prototype.getChatId = function (recipientId) {
        var _this = this;
        var _chat = this.chats.find(function (chat) {
            return !chat.isGroup && !!chat.allTimeMembers.find(function (user) { return user.id === _this.loginService.getUser().id; }) &&
                !!chat.allTimeMembers.find(function (user) { return user.id === recipientId; });
        });
        return _chat ? _chat.id : false;
    };
    ChatsService.prototype.addChat = function (recipientId, users, ouiId) {
        var _this = this;
        this.addChat$ = this.apollo.mutate({
            mutation: addChat_mutation_1.addChatMutation,
            variables: {
                recipientId: recipientId,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                addChat: {
                    id: ouiId,
                    __typename: 'Chat',
                    name: users.find(function (user) { return user.id === recipientId; }).name,
                    picture: users.find(function (user) { return user.id === recipientId; }).picture,
                    allTimeMembers: [
                        {
                            id: this.loginService.getUser().id,
                            __typename: 'User',
                        },
                        {
                            id: recipientId,
                            __typename: 'User',
                        }
                    ],
                    unreadMessages: 0,
                    messages: [],
                    isGroup: false,
                },
            },
            update: function (store, _a) {
                var addChat = _a.data.addChat;
                // Read the data from our cache for this query.
                var chats = store.readQuery({
                    query: getChats_query_1.getChatsQuery,
                    variables: {
                        amount: _this.messagesAmount,
                    },
                }).chats;
                // Add our comment from the mutation to the end.
                chats.push(addChat);
                // Write our data back to the cache.
                store.writeQuery({
                    query: getChats_query_1.getChatsQuery,
                    variables: {
                        amount: _this.messagesAmount,
                    },
                    data: {
                        chats: chats,
                    },
                });
            },
        }).pipe(operators_1.share());
        return this.addChat$;
    };
    ChatsService.prototype.addGroup = function (recipientIds, groupName, ouiId) {
        var _this = this;
        this.addChat$ = this.apollo.mutate({
            mutation: addGroup_mutation_1.addGroupMutation,
            variables: {
                recipientIds: recipientIds,
                groupName: groupName,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                addGroup: {
                    id: ouiId,
                    __typename: 'Chat',
                    name: groupName,
                    picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
                    userIds: [this.loginService.getUser().id, recipientIds],
                    allTimeMembers: tslib_1.__spread([
                        {
                            id: this.loginService.getUser().id,
                            __typename: 'User',
                        }
                    ], recipientIds.map(function (id) { return ({ id: id, __typename: 'User' }); })),
                    unreadMessages: 0,
                    messages: [],
                    isGroup: true,
                },
            },
            update: function (store, _a) {
                var addGroup = _a.data.addGroup;
                // Read the data from our cache for this query.
                var chats = store.readQuery({
                    query: getChats_query_1.getChatsQuery,
                    variables: {
                        amount: _this.messagesAmount,
                    },
                }).chats;
                // Add our comment from the mutation to the end.
                chats.push(addGroup);
                // Write our data back to the cache.
                store.writeQuery({
                    query: getChats_query_1.getChatsQuery,
                    variables: {
                        amount: _this.messagesAmount,
                    },
                    data: {
                        chats: chats,
                    },
                });
            },
        }).pipe(operators_1.share());
        return this.addChat$;
    };
    ChatsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo,
            login_service_1.LoginService])
    ], ChatsService);
    return ChatsService;
}());
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsNENBQStEO0FBQy9ELGlEQUFrRDtBQUNsRCxzQ0FBMkM7QUFDM0MsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCxxRUFBbUU7QUFDbkUscUVBQW1FO0FBRW5FLG1GQUFpRjtBQUNqRiw2RUFBMkU7QUFDM0UsMkRBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCxpRUFBK0Q7QUFDL0Qsa0RBQWlEO0FBQ2pELHlDQUF3QztBQUV4QywyRUFBeUU7QUFDekUsaUZBQStFO0FBQy9FLGdFQUE4RDtBQUc5RDtJQVFFLHNCQUFvQixNQUFjLEVBQ2QsWUFBMEI7UUFEOUMsaUJBNkRDO1FBN0RtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFSOUMsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFTakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBb0M7WUFDMUUsS0FBSyxFQUFFLDhCQUFhO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWM7YUFDNUI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUM5QixRQUFRLEVBQUUsOENBQXFCO1lBQy9CLFdBQVcsRUFBRSxVQUFDLElBQW9CLEVBQUUsRUFBb0I7b0JBQWxCLHNDQUFnQjtnQkFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsSUFBTSxPQUFPLEdBQW1CLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBRWhFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxD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Q0FBQztJQUN2QixDQUFDO0lBeGFVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtpREFTaUIsdUJBQU07WUFDQSw0QkFBWTtPQVRuQyxZQUFZLENBeWF4QjtJQUFELG1CQUFDO0NBQUEsQUF6YUQsSUF5YUM7QUF6YVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZGRDaGF0LCBBZGRHcm91cCwgQWRkTWVzc2FnZSwgR2V0Q2hhdCwgR2V0Q2hhdHMsIEdldFVzZXJzLCBNZXNzYWdlQWRkZWQsIFJlbW92ZUFsbE1lc3NhZ2VzLCBSZW1vdmVDaGF0LFxuICBSZW1vdmVNZXNzYWdlc1xufSBmcm9tICd+L3R5cGVzJztcbmltcG9ydCB7IEFwb2xsb1F1ZXJ5UmVzdWx0LCBNdXRhdGlvbk9wdGlvbnMsIFdhdGNoUXVlcnlPcHRpb25zIH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBjb25jYXQsIG1hcCwgc2hhcmUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwb2xsbywgUXVlcnlSZWYgfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRDaGF0c1F1ZXJ5IH0gZnJvbSAnfi9ncmFwaHFsL2dldENoYXRzLnF1ZXJ5JztcbmltcG9ydCB7IGdldENoYXRRdWVyeSB9IGZyb20gJ34vZ3JhcGhxbC9nZXRDaGF0LnF1ZXJ5JztcbmltcG9ydCB7IGFkZE1lc3NhZ2VNdXRhdGlvbiB9IGZyb20gJ34vZ3JhcGhxbC9hZGRNZXNzYWdlLm11dGF0aW9uJztcbmltcG9ydCB7IHJlbW92ZUNoYXRNdXRhdGlvbiB9IGZyb20gJ34vZ3JhcGhxbC9yZW1vdmVDaGF0Lm11dGF0aW9uJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgcmVtb3ZlQWxsTWVzc2FnZXNNdXRhdGlvbiB9IGZyb20gJ34vZ3JhcGhxbC9yZW1vdmVBbGxNZXNzYWdlcy5tdXRhdGlvbic7XG5pbXBvcnQgeyByZW1vdmVNZXNzYWdlc011dGF0aW9uIH0gZnJvbSAnfi9ncmFwaHFsL3JlbW92ZU1lc3NhZ2VzLm11dGF0aW9uJztcbmltcG9ydCB7IGdldFVzZXJzUXVlcnkgfSBmcm9tICd+L2dyYXBocWwvZ2V0VXNlcnMucXVlcnknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBhZGRDaGF0TXV0YXRpb24gfSBmcm9tICd+L2dyYXBocWwvYWRkQ2hhdC5tdXRhdGlvbic7XG5pbXBvcnQgeyBhZGRHcm91cE11dGF0aW9uIH0gZnJvbSAnfi9ncmFwaHFsL2FkZEdyb3VwLm11dGF0aW9uJztcbmltcG9ydCB7IEFzeW5jU3ViamVjdCB9IGZyb20gJ3J4anMvQXN5bmNTdWJqZWN0JztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IEZldGNoUmVzdWx0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgY2hhdEFkZGVkU3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9ncmFwaHFsL2NoYXRBZGRlZC5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgbWVzc2FnZUFkZGVkU3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9ncmFwaHFsL21lc3NhZ2VBZGRlZC5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIn4vbG9naW4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhdHNTZXJ2aWNlIHtcbiAgbWVzc2FnZXNBbW91bnQgPSAzO1xuICBnZXRDaGF0c1dxOiBRdWVyeVJlZjxHZXRDaGF0cy5RdWVyeT47XG4gIGNoYXRzJDogT2JzZXJ2YWJsZTxHZXRDaGF0cy5DaGF0c1tdPjtcbiAgY2hhdHM6IEdldENoYXRzLkNoYXRzW107XG4gIGdldENoYXRXcVN1YmplY3Q6IEFzeW5jU3ViamVjdDxRdWVyeVJlZjxHZXRDaGF0LlF1ZXJ5Pj47XG4gIGFkZENoYXQkOiBPYnNlcnZhYmxlPEZldGNoUmVzdWx0PEFkZENoYXQuTXV0YXRpb24gfCBBZGRHcm91cC5NdXRhdGlvbj4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcbiAgICB0aGlzLmdldENoYXRzV3EgPSB0aGlzLmFwb2xsby53YXRjaFF1ZXJ5PEdldENoYXRzLlF1ZXJ5Pig8V2F0Y2hRdWVyeU9wdGlvbnM+e1xuICAgICAgcXVlcnk6IGdldENoYXRzUXVlcnksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgYW1vdW50OiB0aGlzLm1lc3NhZ2VzQW1vdW50LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0Q2hhdHNXcS5zdWJzY3JpYmVUb01vcmUoe1xuICAgICAgZG9jdW1lbnQ6IGNoYXRBZGRlZFN1YnNjcmlwdGlvbixcbiAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldjogR2V0Q2hhdHMuUXVlcnksIHsgc3Vic2NyaXB0aW9uRGF0YSB9KSA9PiB7XG4gICAgICAgIGlmICghc3Vic2NyaXB0aW9uRGF0YS5kYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdDaGF0OiBHZXRDaGF0cy5DaGF0cyA9IHN1YnNjcmlwdGlvbkRhdGEuZGF0YS5jaGF0QWRkZWQ7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXYsIHtcbiAgICAgICAgICBjaGF0czogWy4uLnByZXYuY2hhdHMsIG5ld0NoYXRdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRDaGF0c1dxLnN1YnNjcmliZVRvTW9yZSh7XG4gICAgICBkb2N1bWVudDogbWVzc2FnZUFkZGVkU3Vic2NyaXB0aW9uLFxuICAgICAgdXBkYXRlUXVlcnk6IChwcmV2OiBHZXRDaGF0cy5RdWVyeSwgeyBzdWJzY3JpcHRpb25EYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb25EYXRhLmRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2U6IE1lc3NhZ2VBZGRlZC5NZXNzYWdlQWRkZWQgPSBzdWJzY3JpcHRpb25EYXRhLmRhdGEubWVzc2FnZUFkZGVkO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIHRoZSBjYWNoZSBmb3IgYm90aCBDaGF0IGFuZCBDaGF0cy4gVGhlIGZvbGxvd2luZyB1cGRhdGVzIHRoZSBjYWNoZSBmb3IgQ2hhdC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBSZWFkIHRoZSBkYXRhIGZyb20gb3VyIGNhY2hlIGZvciB0aGlzIHF1ZXJ5LlxuICAgICAgICAgIGNvbnN0IHtjaGF0fTogR2V0Q2hhdC5RdWVyeSA9IHRoaXMuYXBvbGxvLmdldENsaWVudCgpLnJlYWRRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogZ2V0Q2hhdFF1ZXJ5LCB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgY2hhdElkOiBuZXdNZXNzYWdlLmNoYXQuaWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBBZGQgb3VyIG1lc3NhZ2UgZnJvbSB0aGUgbXV0YXRpb24gdG8gdGhlIGVuZC5cbiAgICAgICAgICBjaGF0Lm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XG4gICAgICAgICAgLy8gV3JpdGUgb3VyIGRhdGEgYmFjayB0byB0aGUgY2FjaGUuXG4gICAgICAgICAgdGhpcy5hcG9sbG8uZ2V0Q2xpZW50KCkud3JpdGVRdWVyeSh7IHF1ZXJ5OiBnZXRDaGF0UXVlcnksIGRhdGE6IHtjaGF0fSB9KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIGNoYXQgd2UgcmVjZWl2ZWQgYW4gdXBkYXRlIGZvciBkb2VzIG5vdCBleGlzdCBpbiB0aGUgc3RvcmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2LCB7XG4gICAgICAgICAgY2hhdHM6IFsuLi5wcmV2LmNoYXRzLm1hcChfY2hhdCA9PlxuICAgICAgICAgICAgX2NoYXQuaWQgPT09IG5ld01lc3NhZ2UuY2hhdC5pZCA/IHsuLi5fY2hhdCwgbWVzc2FnZXM6IFsuLi5fY2hhdC5tZXNzYWdlcywgbmV3TWVzc2FnZV19IDogX2NoYXQpXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY2hhdHMkID0gdGhpcy5nZXRDaGF0c1dxLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgbWFwKChyZXN1bHQ6IEFwb2xsb1F1ZXJ5UmVzdWx0PEdldENoYXRzLlF1ZXJ5PikgPT4gcmVzdWx0LmRhdGEuY2hhdHMpXG4gICAgKTtcbiAgICB0aGlzLmNoYXRzJC5zdWJzY3JpYmUoY2hhdHMgPT4gdGhpcy5jaGF0cyA9IGNoYXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRSYW5kb21JZCgpIHtcbiAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMDApKTtcbiAgfVxuXG4gIGdldENoYXRzKCkge1xuICAgIHJldHVybiB7cXVlcnk6IHRoaXMuZ2V0Q2hhdHNXcSwgY2hhdHMkOiB0aGlzLmNoYXRzJH07XG4gIH1cblxuICBnZXRDaGF0KGNoYXRJZDogc3RyaW5nLCBvdWk/OiBib29sZWFuKSB7XG4gICAgY29uc3QgX2NoYXQgPSB0aGlzLmNoYXRzICYmIHRoaXMuY2hhdHMuZmluZChjaGF0ID0+IGNoYXQuaWQgPT09IGNoYXRJZCkgfHwge1xuICAgICAgaWQ6IGNoYXRJZCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcGljdHVyZTogbnVsbCxcbiAgICAgIGFsbFRpbWVNZW1iZXJzOiBbXSxcbiAgICAgIHVucmVhZE1lc3NhZ2VzOiAwLFxuICAgICAgaXNHcm91cDogZmFsc2UsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgfTtcbiAgICBjb25zdCBjaGF0JEZyb21DYWNoZSA9IG9mPEdldENoYXQuQ2hhdD4oX2NoYXQpO1xuXG4gICAgY29uc3QgZ2V0QXBvbGxvV2F0Y2hRdWVyeSA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5hcG9sbG8ud2F0Y2hRdWVyeTxHZXRDaGF0LlF1ZXJ5Pih7XG4gICAgICAgIHF1ZXJ5OiBnZXRDaGF0UXVlcnksXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGNoYXRJZDogaWQsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgY2hhdCQ6IE9ic2VydmFibGU8R2V0Q2hhdC5DaGF0PjtcbiAgICB0aGlzLmdldENoYXRXcVN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG5cbiAgICBpZiAob3VpKSB7XG4gICAgICBjaGF0JCA9IGNoYXQkRnJvbUNhY2hlLnBpcGUoXG4gICAgICAgIGNvbmNhdCh0aGlzLmFkZENoYXQkLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKCh7IGRhdGE6IHsgYWRkQ2hhdCwgYWRkR3JvdXAgfSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGdldEFwb2xsb1dhdGNoUXVlcnkoYWRkQ2hhdCA/IGFkZENoYXQuaWQgOiBhZGRHcm91cC5pZCk7XG4gICAgICAgICAgICB0aGlzLmdldENoYXRXcVN1YmplY3QubmV4dChxdWVyeSk7XG4gICAgICAgICAgICB0aGlzLmdldENoYXRXcVN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgICAgbWFwKChyZXN1bHQ6IEFwb2xsb1F1ZXJ5UmVzdWx0PEdldENoYXQuUXVlcnk+KSA9PiByZXN1bHQuZGF0YS5jaGF0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSlcbiAgICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZ2V0QXBvbGxvV2F0Y2hRdWVyeShjaGF0SWQpO1xuICAgICAgdGhpcy5nZXRDaGF0V3FTdWJqZWN0Lm5leHQocXVlcnkpO1xuICAgICAgdGhpcy5nZXRDaGF0V3FTdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICBjaGF0JCA9IGNoYXQkRnJvbUNhY2hlLnBpcGUoXG4gICAgICAgIGNvbmNhdChxdWVyeS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogQXBvbGxvUXVlcnlSZXN1bHQ8R2V0Q2hhdC5RdWVyeT4pID0+IHJlc3VsdC5kYXRhLmNoYXQpXG4gICAgICAgICkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3F1ZXJ5JDogdGhpcy5nZXRDaGF0V3FTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLCBjaGF0JH07XG4gIH1cblxuICBhZGRNZXNzYWdlKGNoYXRJZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ubXV0YXRlKDxNdXRhdGlvbk9wdGlvbnM+e1xuICAgICAgbXV0YXRpb246IGFkZE1lc3NhZ2VNdXRhdGlvbixcbiAgICAgIHZhcmlhYmxlczogPEFkZE1lc3NhZ2UuVmFyaWFibGVzPntcbiAgICAgICAgY2hhdElkLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICAgIC8qb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgIGFkZE1lc3NhZ2U6IHtcbiAgICAgICAgICBpZDogQ2hhdHNTZXJ2aWNlLmdldFJhbmRvbUlkKCksXG4gICAgICAgICAgX190eXBlbmFtZTogJ01lc3NhZ2UnLFxuICAgICAgICAgIHNlbmRlcklkOiB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkuaWQsXG4gICAgICAgICAgc2VuZGVyOiB7XG4gICAgICAgICAgICBpZDogdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLmlkLFxuICAgICAgICAgICAgX190eXBlbmFtZTogJ1VzZXInLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLm5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIGNyZWF0ZWRBdDogbW9tZW50KCkudW5peCgpLFxuICAgICAgICAgIHR5cGU6IDAsXG4gICAgICAgICAgcmVjaXBpZW50czogW10sXG4gICAgICAgICAgb3duZXJzaGlwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSwqL1xuICAgICAgdXBkYXRlOiAoc3RvcmUsIHsgZGF0YTogeyBhZGRNZXNzYWdlIH0gfToge2RhdGE6IEFkZE1lc3NhZ2UuTXV0YXRpb259KSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgbWVzc2FnZXMgY2FjaGVcbiAgICAgICAge1xuICAgICAgICAgIC8vIFJlYWQgdGhlIGRhdGEgZnJvbSBvdXIgY2FjaGUgZm9yIHRoaXMgcXVlcnkuXG4gICAgICAgICAgY29uc3Qge2NoYXR9OiBHZXRDaGF0LlF1ZXJ5ID0gc3RvcmUucmVhZFF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBnZXRDaGF0UXVlcnksIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICBjaGF0SWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gQWRkIG91ciBtZXNzYWdlIGZyb20gdGhlIG11dGF0aW9uIHRvIHRoZSBlbmQuXG4gICAgICAgICAgY2hhdC5tZXNzYWdlcy5wdXNoKGFkZE1lc3NhZ2UpO1xuICAgICAgICAgIC8vIFdyaXRlIG91ciBkYXRhIGJhY2sgdG8gdGhlIGNhY2hlLlxuICAgICAgICAgIHN0b3JlLndyaXRlUXVlcnkoeyBxdWVyeTogZ2V0Q2hhdFF1ZXJ5LCBkYXRhOiB7Y2hhdH0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIGxhc3QgbWVzc2FnZSBjYWNoZVxuICAgICAgICB7XG4gICAgICAgICAgLy8gUmVhZCB0aGUgZGF0YSBmcm9tIG91ciBjYWNoZSBmb3IgdGhpcyBxdWVyeS5cbiAgICAgICAgICBjb25zdCB7Y2hhdHN9OiBHZXRDaGF0cy5RdWVyeSA9IHN0b3JlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogZ2V0Q2hhdHNRdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogPEdldENoYXRzLlZhcmlhYmxlcz57XG4gICAgICAgICAgICAgIGFtb3VudDogdGhpcy5tZXNzYWdlc0Ftb3VudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gQWRkIG91ciBjb21tZW50IGZyb20gdGhlIG11dGF0aW9uIHRvIHRoZSBlbmQuXG4gICAgICAgICAgY2hhdHMuZmluZChjaGF0ID0+IGNoYXQuaWQgPT09IGNoYXRJZCkubWVzc2FnZXMucHVzaChhZGRNZXNzYWdlKTtcbiAgICAgICAgICAvLyBXcml0ZSBvdXIgZGF0YSBiYWNrIHRvIHRoZSBjYWNoZS5cbiAgICAgICAgICBzdG9yZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBnZXRDaGF0c1F1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiA8R2V0Q2hhdHMuVmFyaWFibGVzPntcbiAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLm1lc3NhZ2VzQW1vdW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgY2hhdHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ2hhdChjaGF0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5tdXRhdGUoe1xuICAgICAgbXV0YXRpb246IHJlbW92ZUNoYXRNdXRhdGlvbixcbiAgICAgIHZhcmlhYmxlczogPFJlbW92ZUNoYXQuVmFyaWFibGVzPntcbiAgICAgICAgY2hhdElkLFxuICAgICAgfSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgICByZW1vdmVDaGF0OiBjaGF0SWQsXG4gICAgICB9LFxuICAgICAgdXBkYXRlOiAoc3RvcmUsIHsgZGF0YTogeyByZW1vdmVDaGF0IH0gfSkgPT4ge1xuICAgICAgICAvLyBSZWFkIHRoZSBkYXRhIGZyb20gb3VyIGNhY2hlIGZvciB0aGlzIHF1ZXJ5LlxuICAgICAgICBjb25zdCB7Y2hhdHN9OiBHZXRDaGF0cy5RdWVyeSA9IHN0b3JlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IGdldENoYXRzUXVlcnksXG4gICAgICAgICAgdmFyaWFibGVzOiA8R2V0Q2hhdHMuVmFyaWFibGVzPntcbiAgICAgICAgICAgIGFtb3VudDogdGhpcy5tZXNzYWdlc0Ftb3VudCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGF0IChtdXRhYmxlKVxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGNoYXRzLmtleXMoKSkge1xuICAgICAgICAgIGlmIChjaGF0c1tpbmRleF0uaWQgPT09IHJlbW92ZUNoYXQpIHtcbiAgICAgICAgICAgIGNoYXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdyaXRlIG91ciBkYXRhIGJhY2sgdG8gdGhlIGNhY2hlLlxuICAgICAgICBzdG9yZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICBxdWVyeTogZ2V0Q2hhdHNRdWVyeSxcbiAgICAgICAgICB2YXJpYWJsZXM6IDxHZXRDaGF0cy5WYXJpYWJsZXM+e1xuICAgICAgICAgICAgYW1vdW50OiB0aGlzLm1lc3NhZ2VzQW1vdW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhdHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWVzc2FnZXMoY2hhdElkOiBzdHJpbmcsIG1lc3NhZ2VzOiBHZXRDaGF0Lk1lc3NhZ2VzW10sIG1lc3NhZ2VJZHNPckFsbDogc3RyaW5nW10gfCBib29sZWFuKSB7XG4gICAgbGV0IHZhcmlhYmxlczogUmVtb3ZlTWVzc2FnZXMuVmFyaWFibGVzIHwgUmVtb3ZlQWxsTWVzc2FnZXMuVmFyaWFibGVzO1xuICAgIGxldCBpZHM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IG11dGF0aW9uOiBEb2N1bWVudE5vZGU7XG5cbiAgICBpZiAodHlwZW9mIG1lc3NhZ2VJZHNPckFsbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB2YXJpYWJsZXMgPSB7Y2hhdElkLCBhbGw6IG1lc3NhZ2VJZHNPckFsbH0gYXMgUmVtb3ZlQWxsTWVzc2FnZXMuVmFyaWFibGVzO1xuICAgICAgaWRzID0gbWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4gbWVzc2FnZS5pZCk7XG4gICAgICBtdXRhdGlvbiA9IHJlbW92ZUFsbE1lc3NhZ2VzTXV0YXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhYmxlcyA9IHtjaGF0SWQsIG1lc3NhZ2VJZHM6IG1lc3NhZ2VJZHNPckFsbH0gYXMgUmVtb3ZlTWVzc2FnZXMuVmFyaWFibGVzO1xuICAgICAgaWRzID0gbWVzc2FnZUlkc09yQWxsO1xuICAgICAgbXV0YXRpb24gPSByZW1vdmVNZXNzYWdlc011dGF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFwb2xsby5tdXRhdGUoPE11dGF0aW9uT3B0aW9ucz57XG4gICAgICBtdXRhdGlvbixcbiAgICAgIHZhcmlhYmxlcyxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgICByZW1vdmVNZXNzYWdlczogaWRzLFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogKHN0b3JlLCB7IGRhdGE6IHsgcmVtb3ZlTWVzc2FnZXMgfSB9OiB7ZGF0YTogUmVtb3ZlTWVzc2FnZXMuTXV0YXRpb24gfCBSZW1vdmVBbGxNZXNzYWdlcy5NdXRhdGlvbn0pID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBtZXNzYWdlcyBjYWNoZVxuICAgICAgICB7XG4gICAgICAgICAgLy8gUmVhZCB0aGUgZGF0YSBmcm9tIG91ciBjYWNoZSBmb3IgdGhpcyBxdWVyeS5cbiAgICAgICAgICBjb25zdCB7Y2hhdH06IEdldENoYXQuUXVlcnkgPSBzdG9yZS5yZWFkUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGdldENoYXRRdWVyeSwgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIGNoYXRJZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIG1lc3NhZ2VzIChtdXRhYmxlKVxuICAgICAgICAgIHJlbW92ZU1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZUlkID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgY2hhdC5tZXNzYWdlcy5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgaWYgKGNoYXQubWVzc2FnZXNbaW5kZXhdLmlkID09PSBtZXNzYWdlSWQpIHtcbiAgICAgICAgICAgICAgICBjaGF0Lm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBXcml0ZSBvdXIgZGF0YSBiYWNrIHRvIHRoZSBjYWNoZS5cbiAgICAgICAgICBzdG9yZS53cml0ZVF1ZXJ5KHsgcXVlcnk6IGdldENoYXRRdWVyeSwgZGF0YToge2NoYXR9IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSBsYXN0IG1lc3NhZ2UgY2FjaGVcbiAgICAgICAge1xuICAgICAgICAgIC8vIFJlYWQgdGhlIGRhdGEgZnJvbSBvdXIgY2FjaGUgZm9yIHRoaXMgcXVlcnkuXG4gICAgICAgICAgY29uc3Qge2NoYXRzfTogR2V0Q2hhdHMuUXVlcnkgPSBzdG9yZS5yZWFkUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGdldENoYXRzUXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IDxHZXRDaGF0cy5WYXJpYWJsZXM+e1xuICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMubWVzc2FnZXNBbW91bnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIEZpeCBsYXN0IG1lc3NhZ2VcbiAgICAgICAgICBjaGF0cy5maW5kKGNoYXQgPT4gY2hhdC5pZCA9PT0gY2hhdElkKS5tZXNzYWdlcyA9IG1lc3NhZ2VzXG4gICAgICAgICAgICAuZmlsdGVyKG1lc3NhZ2UgPT4gIWlkcy5pbmNsdWRlcyhtZXNzYWdlLmlkKSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYi5jcmVhdGVkQXQpIC0gTnVtYmVyKGEuY3JlYXRlZEF0KSkgfHwgW107XG4gICAgICAgICAgLy8gV3JpdGUgb3VyIGRhdGEgYmFjayB0byB0aGUgY2FjaGUuXG4gICAgICAgICAgc3RvcmUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogZ2V0Q2hhdHNRdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogPEdldENoYXRzLlZhcmlhYmxlcz57XG4gICAgICAgICAgICAgIGFtb3VudDogdGhpcy5tZXNzYWdlc0Ftb3VudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGNoYXRzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5hcG9sbG8ud2F0Y2hRdWVyeTxHZXRVc2Vycy5RdWVyeT4oPFdhdGNoUXVlcnlPcHRpb25zPntcbiAgICAgIHF1ZXJ5OiBnZXRVc2Vyc1F1ZXJ5LFxuICAgIH0pO1xuICAgIGNvbnN0IHVzZXJzJCA9IHF1ZXJ5LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgbWFwKChyZXN1bHQ6IEFwb2xsb1F1ZXJ5UmVzdWx0PEdldFVzZXJzLlF1ZXJ5PikgPT4gcmVzdWx0LmRhdGEudXNlcnMpXG4gICAgKTtcblxuICAgIHJldHVybiB7cXVlcnksIHVzZXJzJH07XG4gIH1cblxuICAvLyBDaGVja3MgaWYgdGhlIGNoYXQgaXMgbGlzdGVkIGZvciB0aGUgY3VycmVudCB1c2VyIGFuZCByZXR1cm5zIHRoZSBpZFxuICBnZXRDaGF0SWQocmVjaXBpZW50SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IF9jaGF0ID0gdGhpcy5jaGF0cy5maW5kKGNoYXQgPT4ge1xuICAgICAgcmV0dXJuICFjaGF0LmlzR3JvdXAgJiYgISFjaGF0LmFsbFRpbWVNZW1iZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkuaWQpICYmXG4gICAgICAgICEhY2hhdC5hbGxUaW1lTWVtYmVycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gcmVjaXBpZW50SWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBfY2hhdCA/IF9jaGF0LmlkIDogZmFsc2U7XG4gIH1cblxuICBhZGRDaGF0KHJlY2lwaWVudElkOiBzdHJpbmcsIHVzZXJzOiBHZXRVc2Vycy5Vc2Vyc1tdLCBvdWlJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZGRDaGF0JCA9IHRoaXMuYXBvbGxvLm11dGF0ZSh7XG4gICAgICBtdXRhdGlvbjogYWRkQ2hhdE11dGF0aW9uLFxuICAgICAgdmFyaWFibGVzOiA8QWRkQ2hhdC5WYXJpYWJsZXM+e1xuICAgICAgICByZWNpcGllbnRJZCxcbiAgICAgIH0sXG4gICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgX190eXBlbmFtZTogJ011dGF0aW9uJyxcbiAgICAgICAgYWRkQ2hhdDoge1xuICAgICAgICAgIGlkOiBvdWlJZCxcbiAgICAgICAgICBfX3R5cGVuYW1lOiAnQ2hhdCcsXG4gICAgICAgICAgbmFtZTogdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IHJlY2lwaWVudElkKS5uYW1lLFxuICAgICAgICAgIHBpY3R1cmU6IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSByZWNpcGllbnRJZCkucGljdHVyZSxcbiAgICAgICAgICBhbGxUaW1lTWVtYmVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLmlkLFxuICAgICAgICAgICAgICBfX3R5cGVuYW1lOiAnVXNlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogcmVjaXBpZW50SWQsXG4gICAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdVc2VyJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHVucmVhZE1lc3NhZ2VzOiAwLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICBpc0dyb3VwOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IChzdG9yZSwgeyBkYXRhOiB7IGFkZENoYXQgfSB9KSA9PiB7XG4gICAgICAgIC8vIFJlYWQgdGhlIGRhdGEgZnJvbSBvdXIgY2FjaGUgZm9yIHRoaXMgcXVlcnkuXG4gICAgICAgIGNvbnN0IHtjaGF0c306IEdldENoYXRzLlF1ZXJ5ID0gc3RvcmUucmVhZFF1ZXJ5KHtcbiAgICAgICAgICBxdWVyeTogZ2V0Q2hhdHNRdWVyeSxcbiAgICAgICAgICB2YXJpYWJsZXM6IDxHZXRDaGF0cy5WYXJpYWJsZXM+e1xuICAgICAgICAgICAgYW1vdW50OiB0aGlzLm1lc3NhZ2VzQW1vdW50LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgb3VyIGNvbW1lbnQgZnJvbSB0aGUgbXV0YXRpb24gdG8gdGhlIGVuZC5cbiAgICAgICAgY2hhdHMucHVzaChhZGRDaGF0KTtcbiAgICAgICAgLy8gV3JpdGUgb3VyIGRhdGEgYmFjayB0byB0aGUgY2FjaGUuXG4gICAgICAgIHN0b3JlLndyaXRlUXVlcnkoe1xuICAgICAgICAgIHF1ZXJ5OiBnZXRDaGF0c1F1ZXJ5LFxuICAgICAgICAgIHZhcmlhYmxlczogPEdldENoYXRzLlZhcmlhYmxlcz57XG4gICAgICAgICAgICBhbW91bnQ6IHRoaXMubWVzc2FnZXNBbW91bnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGF0cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSkucGlwZShzaGFyZSgpKTtcbiAgICByZXR1cm4gdGhpcy5hZGRDaGF0JDtcbiAgfVxuXG4gIGFkZEdyb3VwKHJlY2lwaWVudElkczogc3RyaW5nW10sIGdyb3VwTmFtZTogc3RyaW5nLCBvdWlJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZGRDaGF0JCA9IHRoaXMuYXBvbGxvLm11dGF0ZSh7XG4gICAgICBtdXRhdGlvbjogYWRkR3JvdXBNdXRhdGlvbixcbiAgICAgIHZhcmlhYmxlczogPEFkZEdyb3VwLlZhcmlhYmxlcz57XG4gICAgICAgIHJlY2lwaWVudElkcyxcbiAgICAgICAgZ3JvdXBOYW1lLFxuICAgICAgfSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgICBhZGRHcm91cDoge1xuICAgICAgICAgIGlkOiBvdWlJZCxcbiAgICAgICAgICBfX3R5cGVuYW1lOiAnQ2hhdCcsXG4gICAgICAgICAgbmFtZTogZ3JvdXBOYW1lLFxuICAgICAgICAgIHBpY3R1cmU6ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy90aHVtYi9sZWdvLzEuanBnJyxcbiAgICAgICAgICB1c2VySWRzOiBbdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLmlkLCByZWNpcGllbnRJZHNdLFxuICAgICAgICAgIGFsbFRpbWVNZW1iZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkuaWQsXG4gICAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdVc2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5yZWNpcGllbnRJZHMubWFwKGlkID0+ICh7aWQsIF9fdHlwZW5hbWU6ICdVc2VyJ30pKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHVucmVhZE1lc3NhZ2VzOiAwLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICBpc0dyb3VwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogKHN0b3JlLCB7IGRhdGE6IHsgYWRkR3JvdXAgfSB9KSA9PiB7XG4gICAgICAgIC8vIFJlYWQgdGhlIGRhdGEgZnJvbSBvdXIgY2FjaGUgZm9yIHRoaXMgcXVlcnkuXG4gICAgICAgIGNvbnN0IHtjaGF0c306IEdldENoYXRzLlF1ZXJ5ID0gc3RvcmUucmVhZFF1ZXJ5KHtcbiAgICAgICAgICBxdWVyeTogZ2V0Q2hhdHNRdWVyeSxcbiAgICAgICAgICB2YXJpYWJsZXM6IDxHZXRDaGF0cy5WYXJpYWJsZXM+e1xuICAgICAgICAgICAgYW1vdW50OiB0aGlzLm1lc3NhZ2VzQW1vdW50LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgb3VyIGNvbW1lbnQgZnJvbSB0aGUgbXV0YXRpb24gdG8gdGhlIGVuZC5cbiAgICAgICAgY2hhdHMucHVzaChhZGRHcm91cCk7XG4gICAgICAgIC8vIFdyaXRlIG91ciBkYXRhIGJhY2sgdG8gdGhlIGNhY2hlLlxuICAgICAgICBzdG9yZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICBxdWVyeTogZ2V0Q2hhdHNRdWVyeSxcbiAgICAgICAgICB2YXJpYWJsZXM6IDxHZXRDaGF0cy5WYXJpYWJsZXM+e1xuICAgICAgICAgICAgYW1vdW50OiB0aGlzLm1lc3NhZ2VzQW1vdW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhdHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLnBpcGUoc2hhcmUoKSk7XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2hhdCQ7XG4gIH1cbn1cbiJdfQ==