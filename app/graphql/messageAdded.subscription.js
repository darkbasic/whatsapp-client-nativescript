"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_tag_1 = require("graphql-tag");
var fragment_1 = require("./fragment");
// We use the gql tag to parse our query string into a query document
exports.messageAddedSubscription = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  subscription messageAdded($chatId: ID) {\n    messageAdded(chatId: $chatId) {\n      ...Message\n      chat {\n        id,\n      },\n    }\n  }\n\n  ", "\n"], ["\n  subscription messageAdded($chatId: ID) {\n    messageAdded(chatId: $chatId) {\n      ...Message\n      chat {\n        id,\n      },\n    }\n  }\n\n  ", "\n"])), fragment_1.fragments['message']);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZUFkZGVkLnN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2VBZGRlZC5zdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThCO0FBQzlCLHVDQUFxQztBQUVyQyxxRUFBcUU7QUFDeEQsUUFBQSx3QkFBd0IsR0FBRyxxQkFBRyw2T0FBQSw0SkFVdkMsRUFBb0IsSUFDdkIsS0FERyxvQkFBUyxDQUFDLFNBQVMsQ0FBQyxFQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHtmcmFnbWVudHN9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG4vLyBXZSB1c2UgdGhlIGdxbCB0YWcgdG8gcGFyc2Ugb3VyIHF1ZXJ5IHN0cmluZyBpbnRvIGEgcXVlcnkgZG9jdW1lbnRcbmV4cG9ydCBjb25zdCBtZXNzYWdlQWRkZWRTdWJzY3JpcHRpb24gPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBtZXNzYWdlQWRkZWQoJGNoYXRJZDogSUQpIHtcbiAgICBtZXNzYWdlQWRkZWQoY2hhdElkOiAkY2hhdElkKSB7XG4gICAgICAuLi5NZXNzYWdlXG4gICAgICBjaGF0IHtcbiAgICAgICAgaWQsXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gICR7ZnJhZ21lbnRzWydtZXNzYWdlJ119XG5gO1xuIl19