"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var chat_component_1 = require("~/chat-viewer/containers/chat/chat.component");
var message_item_component_1 = require("~/chat-viewer/components/message-item/message-item.component");
var messages_list_component_1 = require("~/chat-viewer/components/messages-list/messages-list.component");
var new_message_component_1 = require("~/chat-viewer/components/new-message/new-message.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
var forms_1 = require("@angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var app_routing_1 = require("~/app.routing");
var auth_guard_1 = require("~/login/services/auth.guard");
var ngx_selectable_list_1 = require("ngx-selectable-list");
var shared_module_1 = require("~/shared/shared.module");
var routes = [
    {
        path: 'chat', children: [
            { path: ':id', canActivate: [auth_guard_1.AuthGuard], component: chat_component_1.ChatComponent },
        ],
    },
];
var ChatViewerModule = /** @class */ (function () {
    function ChatViewerModule() {
    }
    ChatViewerModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                chat_component_1.ChatComponent,
                messages_list_component_1.MessagesListComponent,
                message_item_component_1.MessageItemComponent,
                new_message_component_1.NewMessageComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule,
                forms_1.ReactiveFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routes),
                ngx_selectable_list_1.SelectableListModule,
                shared_module_1.SharedModule,
            ],
            providers: [],
        })
    ], ChatViewerModule);
    return ChatViewerModule;
}());
exports.ChatViewerModule = ChatViewerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6QywrRUFBNkU7QUFDN0UsdUdBQW9HO0FBQ3BHLDBHQUF1RztBQUN2RyxvR0FBaUc7QUFDakcsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUNoRix3Q0FBcUQ7QUFDckQsNkRBQXlGO0FBQ3pGLDZDQUFpRDtBQUNqRCwwREFBd0Q7QUFFeEQsMkRBQTJEO0FBQzNELHdEQUFzRDtBQUV0RCxJQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO1lBQ3RCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7U0FDbEU7S0FDRjtDQUNGLENBQUM7QUFzQkY7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFwQjVCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw4QkFBYTtnQkFDYiwrQ0FBcUI7Z0JBQ3JCLDZDQUFvQjtnQkFDcEIsMkNBQW1CO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiw4Q0FBdUI7Z0JBQ3ZCLDJCQUFtQjtnQkFDbkIsMENBQTRCO2dCQUM1QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN6QywwQ0FBb0I7Z0JBQ3BCLDRCQUFZO2FBQ2I7WUFDRCxTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FDNUI7SUFBRCx1QkFBQztDQUFBLEFBREQsSUFDQztBQURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSBcIn4vY2hhdC12aWV3ZXIvY29udGFpbmVycy9jaGF0L2NoYXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlSXRlbUNvbXBvbmVudCB9IGZyb20gXCJ+L2NoYXQtdmlld2VyL2NvbXBvbmVudHMvbWVzc2FnZS1pdGVtL21lc3NhZ2UtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VzTGlzdENvbXBvbmVudCB9IGZyb20gXCJ+L2NoYXQtdmlld2VyL2NvbXBvbmVudHMvbWVzc2FnZXMtbGlzdC9tZXNzYWdlcy1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmV3TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCJ+L2NoYXQtdmlld2VyL2NvbXBvbmVudHMvbmV3LW1lc3NhZ2UvbmV3LW1lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9sb2dpbi9zZXJ2aWNlcy9hdXRoLmd1YXJkXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTGlzdE1vZHVsZSB9IGZyb20gXCJuZ3gtc2VsZWN0YWJsZS1saXN0XCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwifi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdjaGF0JywgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnOmlkJywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjb21wb25lbnQ6IENoYXRDb21wb25lbnR9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDaGF0Q29tcG9uZW50LFxuICAgIE1lc3NhZ2VzTGlzdENvbXBvbmVudCxcbiAgICBNZXNzYWdlSXRlbUNvbXBvbmVudCxcbiAgICBOZXdNZXNzYWdlQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICAgIFNlbGVjdGFibGVMaXN0TW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRWaWV3ZXJNb2R1bGUge1xufVxuIl19