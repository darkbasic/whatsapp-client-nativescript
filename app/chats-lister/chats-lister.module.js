"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var chat_item_component_1 = require("./components/chat-item/chat-item.component");
var chats_component_1 = require("./containers/chats/chats.component");
var chats_list_component_1 = require("./components/chats-list/chats-list.component");
var auth_guard_1 = require("~/login/services/auth.guard");
var router_1 = require("nativescript-angular/router");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("~/app.routing");
var forms_2 = require("nativescript-angular/forms");
var chats_service_1 = require("~/services/chats.service");
var ngx_selectable_list_1 = require("ngx-selectable-list");
var shared_module_1 = require("~/shared/shared.module");
var routes = [
    { path: '', redirectTo: 'chats', pathMatch: 'full' },
    { path: 'chats', canActivate: [auth_guard_1.AuthGuard], component: chats_component_1.ChatsComponent },
];
var ChatsListerModule = /** @class */ (function () {
    function ChatsListerModule() {
    }
    ChatsListerModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                chats_component_1.ChatsComponent,
                chats_list_component_1.ChatsListComponent,
                chat_item_component_1.ChatItemComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_2.NativeScriptFormsModule,
                forms_1.ReactiveFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                router_1.NativeScriptRouterModule.forChild(routes),
                ngx_selectable_list_1.SelectableListModule,
                shared_module_1.SharedModule,
            ],
            providers: [
                chats_service_1.ChatsService,
            ],
        })
    ], ChatsListerModule);
    return ChatsListerModule;
}());
exports.ChatsListerModule = ChatsListerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMtbGlzdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLWxpc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXlDO0FBRXpDLHdDQUFxRDtBQUNyRCxrRkFBK0U7QUFDL0Usc0VBQW9FO0FBQ3BFLHFGQUFrRjtBQUNsRiwwREFBd0Q7QUFDeEQsc0RBQXVFO0FBQ3ZFLGdFQUFnRjtBQUNoRixnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELG9EQUFxRTtBQUNyRSwwREFBd0Q7QUFDeEQsMkRBQTJEO0FBQzNELHdEQUFzRDtBQUV0RCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7Q0FDckUsQ0FBQztBQXNCRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGlCQUFpQjtRQXBCN0IsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGdDQUFjO2dCQUNkLHlDQUFrQjtnQkFDbEIsdUNBQWlCO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDJCQUFtQjtnQkFDbkIsMENBQTRCO2dCQUM1QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN6QywwQ0FBb0I7Z0JBQ3BCLDRCQUFZO2FBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7YUFDYjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FDN0I7SUFBRCx3QkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENoYXRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYXQtaXRlbS9jaGF0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENoYXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXJzL2NoYXRzL2NoYXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGF0c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhdHMtbGlzdC9jaGF0cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9sb2dpbi9zZXJ2aWNlcy9hdXRoLmd1YXJkXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvY2hhdHMuc2VydmljZVwiO1xuaW1wb3J0IHsgU2VsZWN0YWJsZUxpc3RNb2R1bGUgfSBmcm9tIFwibmd4LXNlbGVjdGFibGUtbGlzdFwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIn4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2NoYXRzJywgcGF0aE1hdGNoOiAnZnVsbCd9LFxuICB7cGF0aDogJ2NoYXRzJywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjb21wb25lbnQ6IENoYXRzQ29tcG9uZW50fSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXRzQ29tcG9uZW50LFxuICAgIENoYXRzTGlzdENvbXBvbmVudCxcbiAgICBDaGF0SXRlbUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICBTZWxlY3RhYmxlTGlzdE1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENoYXRzU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdHNMaXN0ZXJNb2R1bGUge1xufVxuIl19