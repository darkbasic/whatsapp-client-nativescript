"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var forms_1 = require("nativescript-angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
var apollo_angular_1 = require("apollo-angular");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var http_1 = require("@angular/common/http");
var auth_interceptor_1 = require("~/login/services/auth.interceptor");
var login_module_1 = require("~/login/login.module");
var apollo_link_ws_1 = require("apollo-link-ws");
var apollo_link_1 = require("apollo-link");
var apollo_utilities_1 = require("apollo-utilities");
//import * as  base64 from "base-64";
require("nativescript-websockets");
var forms_2 = require("@angular/forms");
var chat_viewer_module_1 = require("~/chat-viewer/chat-viewer.module");
var chats_lister_module_1 = require("~/chats-lister/chats-lister.module");
var shared_module_1 = require("~/shared/shared.module");
var login_service_1 = require("~/login/services/login.service");
var url = '192.168.1.197:3000';
var graphql = "http://" + url + "/graphql";
var subscriptions = "ws://" + url + "/subscriptions";
var signin = "http://" + url + "/signin";
var AppModule = /** @class */ (function () {
    function AppModule(apollo, httpLink, loginService) {
        console.log('app.module');
        //const username = 'ethan';
        //const password = '111'; // 111
        //const auth = `Basic ${base64.encode(`${username}:${password}`)}`;
        var auth = loginService.getAuthHeader() || null;
        var subscriptionLink = new apollo_link_ws_1.WebSocketLink({
            uri: subscriptions,
            options: {
                reconnect: true,
                connectionParams: function () { return ({
                    authToken: auth
                }); }
            },
            webSocketImpl: WebSocket,
        });
        var link = apollo_link_1.split(function (_a) {
            var query = _a.query;
            var _b = apollo_utilities_1.getMainDefinition(query), kind = _b.kind, operation = _b.operation;
            return kind === 'OperationDefinition' && operation === 'subscription';
        }, subscriptionLink, httpLink.create({ uri: graphql }));
        apollo.create({
            link: link,
            cache: new apollo_cache_inmemory_1.InMemoryCache({
                dataIdFromObject: function (object) {
                    switch (object.__typename) {
                        case 'Message': return object.chat.id + ":" + object.id; // use `chatId` prefix and `messageId` as the primary key
                        default: return apollo_cache_inmemory_1.defaultDataIdFromObject(object); // fall back to default handling
                    }
                }
            }),
        });
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                apollo_angular_1.ApolloModule,
                apollo_angular_link_http_1.HttpLinkModule,
                login_module_1.LoginModule,
                chat_viewer_module_1.ChatViewerModule,
                chats_lister_module_1.ChatsListerModule,
                shared_module_1.SharedModule,
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true,
                },
                { provide: 'url', useValue: url },
                { provide: 'graphql', useValue: graphql },
                { provide: 'subscriptions', useValue: subscriptions },
                { provide: 'signin', useValue: signin },
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
        ,
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo,
            apollo_angular_link_http_1.HttpLink,
            login_service_1.LoginService])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLG9EQUFxRTtBQUNyRSxnRUFBZ0Y7QUFDaEYsaURBQXNEO0FBQ3RELHFFQUFvRTtBQUNwRSwrREFBK0U7QUFDL0UsNkNBQXlEO0FBQ3pELHNFQUFvRTtBQUNwRSxxREFBbUQ7QUFDbkQsaURBQStDO0FBQy9DLDJDQUFvQztBQUNwQyxxREFBcUQ7QUFFckQscUNBQXFDO0FBQ3JDLG1DQUFpQztBQUNqQyx3Q0FBcUQ7QUFDckQsdUVBQW9FO0FBQ3BFLDBFQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsZ0VBQThEO0FBRTlELElBQU0sR0FBRyxHQUFHLG9CQUFvQixDQUFDO0FBQ2pDLElBQU0sT0FBTyxHQUFHLFlBQVUsR0FBRyxhQUFVLENBQUM7QUFDeEMsSUFBTSxhQUFhLEdBQUcsVUFBUSxHQUFHLG1CQUFnQixDQUFDO0FBQ2xELElBQU0sTUFBTSxHQUFHLFlBQVUsR0FBRyxZQUFTLENBQUM7QUF3Q3RDO0lBQ0UsbUJBQ0UsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLFlBQTBCO1FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsMkJBQTJCO1FBQzNCLGdDQUFnQztRQUNoQyxtRUFBbUU7UUFDbkUsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQztRQUVsRCxJQUFNLGdCQUFnQixHQUFHLElBQUksOEJBQWEsQ0FBQztZQUN6QyxHQUFHLEVBQUUsYUFBYTtZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsZ0JBQWdCLEVBQUUsY0FBTSxPQUFBLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLEVBRnNCLENBRXRCO2FBQ0g7WUFDRCxhQUFhLEVBQUUsU0FBUztTQUN6QixDQUFDLENBQUM7UUFFSCxJQUFNLElBQUksR0FBRyxtQkFBSyxDQUNoQixVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFDQSxJQUFBLGdEQUF1RSxFQUFyRSxjQUFJLEVBQUUsd0JBQVMsQ0FBdUQ7WUFDOUUsTUFBTSxDQUFDLElBQUksS0FBSyxxQkFBcUIsSUFBSSxTQUFTLEtBQUssY0FBYyxDQUFDO1FBQ3hFLENBQUMsRUFDRCxnQkFBZ0IsRUFDaEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUNoQyxDQUFDO1FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxJQUFJLHFDQUFhLENBQUM7Z0JBQ3ZCLGdCQUFnQixFQUFFLFVBQUMsTUFBVztvQkFDNUIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLEtBQUssU0FBUyxFQUFFLE1BQU0sQ0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBSSxNQUFNLENBQUMsRUFBSSxDQUFDLENBQUMseURBQXlEO3dCQUNsSCxTQUFTLE1BQU0sQ0FBQywrQ0FBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztvQkFDbkYsQ0FBQztnQkFDSCxDQUFDO2FBQ0YsQ0FBQztTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7SUEzQ1UsU0FBUztRQXRDckIsZUFBUSxDQUFDO1lBQ1IsU0FBUyxFQUFFO2dCQUNULDRCQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQiwwQ0FBNEI7Z0JBQzVCLDZCQUFZO2dCQUNaLHlDQUFjO2dCQUNkLDBCQUFXO2dCQUNYLHFDQUFnQjtnQkFDaEIsdUNBQWlCO2dCQUNqQiw0QkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2FBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGtDQUFlO29CQUN6QixLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDakMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7Z0JBQ3pDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2dCQUNyRCxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7U0FDRixDQUFDO1FBQ0Y7O1VBRUU7O2lEQUdVLHVCQUFNO1lBQ0osbUNBQVE7WUFDSiw0QkFBWTtPQUpqQixTQUFTLENBNkNyQjtJQUFELGdCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgQXBvbGxvLCBBcG9sbG9Nb2R1bGUgfSBmcm9tIFwiYXBvbGxvLWFuZ3VsYXJcIjtcbmltcG9ydCB7IEh0dHBMaW5rLCBIdHRwTGlua01vZHVsZSB9IGZyb20gXCJhcG9sbG8tYW5ndWxhci1saW5rLWh0dHBcIjtcbmltcG9ydCB7IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gXCJ+L2xvZ2luL3NlcnZpY2VzL2F1dGguaW50ZXJjZXB0b3JcIjtcbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSBcIn4vbG9naW4vbG9naW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSBcImFwb2xsby1saW5rLXdzXCI7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tIFwiYXBvbGxvLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgT3BlcmF0aW9uRGVmaW5pdGlvbk5vZGUgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuLy9pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5pbXBvcnQgJ25hdGl2ZXNjcmlwdC13ZWJzb2NrZXRzJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IENoYXRWaWV3ZXJNb2R1bGUgfSBmcm9tIFwifi9jaGF0LXZpZXdlci9jaGF0LXZpZXdlci5tb2R1bGVcIjtcbmltcG9ydCB7IENoYXRzTGlzdGVyTW9kdWxlIH0gZnJvbSBcIn4vY2hhdHMtbGlzdGVyL2NoYXRzLWxpc3Rlci5tb2R1bGVcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJ+L3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwifi9sb2dpbi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5cbmNvbnN0IHVybCA9ICcxOTIuMTY4LjEuMTk3OjMwMDAnO1xuY29uc3QgZ3JhcGhxbCA9IGBodHRwOi8vJHt1cmx9L2dyYXBocWxgO1xuY29uc3Qgc3Vic2NyaXB0aW9ucyA9IGB3czovLyR7dXJsfS9zdWJzY3JpcHRpb25zYDtcbmNvbnN0IHNpZ25pbiA9IGBodHRwOi8vJHt1cmx9L3NpZ25pbmA7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEFwb2xsb01vZHVsZSxcbiAgICBIdHRwTGlua01vZHVsZSxcbiAgICBMb2dpbk1vZHVsZSxcbiAgICBDaGF0Vmlld2VyTW9kdWxlLFxuICAgIENoYXRzTGlzdGVyTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBBdXRoSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogJ3VybCcsIHVzZVZhbHVlOiB1cmwgfSxcbiAgICB7IHByb3ZpZGU6ICdncmFwaHFsJywgdXNlVmFsdWU6IGdyYXBocWwgfSxcbiAgICB7IHByb3ZpZGU6ICdzdWJzY3JpcHRpb25zJywgdXNlVmFsdWU6IHN1YnNjcmlwdGlvbnMgfSxcbiAgICB7IHByb3ZpZGU6ICdzaWduaW4nLCB1c2VWYWx1ZTogc2lnbmluIH0sXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhcG9sbG86IEFwb2xsbyxcbiAgICBodHRwTGluazogSHR0cExpbmssXG4gICAgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdhcHAubW9kdWxlJyk7XG4gICAgLy9jb25zdCB1c2VybmFtZSA9ICdldGhhbic7XG4gICAgLy9jb25zdCBwYXNzd29yZCA9ICcxMTEnOyAvLyAxMTFcbiAgICAvL2NvbnN0IGF1dGggPSBgQmFzaWMgJHtiYXNlNjQuZW5jb2RlKGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWApfWA7XG4gICAgY29uc3QgYXV0aCA9IGxvZ2luU2VydmljZS5nZXRBdXRoSGVhZGVyKCkgfHwgbnVsbDtcblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbkxpbmsgPSBuZXcgV2ViU29ja2V0TGluayh7XG4gICAgICB1cmk6IHN1YnNjcmlwdGlvbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgY29ubmVjdGlvblBhcmFtczogKCkgPT4gKHtcbiAgICAgICAgICBhdXRoVG9rZW46IGF1dGhcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB3ZWJTb2NrZXRJbXBsOiBXZWJTb2NrZXQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBsaW5rID0gc3BsaXQoXG4gICAgICAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsga2luZCwgb3BlcmF0aW9uIH0gPSA8T3BlcmF0aW9uRGVmaW5pdGlvbk5vZGU+Z2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICByZXR1cm4ga2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIG9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbic7XG4gICAgICB9LFxuICAgICAgc3Vic2NyaXB0aW9uTGluayxcbiAgICAgIGh0dHBMaW5rLmNyZWF0ZSh7dXJpOiBncmFwaHFsfSlcbiAgICApO1xuXG4gICAgYXBvbGxvLmNyZWF0ZSh7XG4gICAgICBsaW5rLFxuICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgICAgZGF0YUlkRnJvbU9iamVjdDogKG9iamVjdDogYW55KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChvYmplY3QuX190eXBlbmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnTWVzc2FnZSc6IHJldHVybiBgJHtvYmplY3QuY2hhdC5pZH06JHtvYmplY3QuaWR9YDsgLy8gdXNlIGBjaGF0SWRgIHByZWZpeCBhbmQgYG1lc3NhZ2VJZGAgYXMgdGhlIHByaW1hcnkga2V5XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZGVmYXVsdERhdGFJZEZyb21PYmplY3Qob2JqZWN0KTsgLy8gZmFsbCBiYWNrIHRvIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==