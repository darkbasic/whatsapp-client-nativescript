"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var auth_interceptor_1 = require("./services/auth.interceptor");
var auth_guard_1 = require("./services/auth.guard");
var login_service_1 = require("./services/login.service");
var http_client_1 = require("nativescript-angular/http-client");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("~/app.routing");
var login_component_1 = require("~/login/containers/login.component");
var router_1 = require("nativescript-angular/router");
var forms_2 = require("@angular/forms");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                router_1.NativeScriptRouterModule.forChild(routes),
            ],
            providers: [
                login_service_1.LoginService,
                auth_interceptor_1.AuthInterceptor,
                auth_guard_1.AuthGuard,
            ],
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF1QztBQUN2QyxnRUFBNEQ7QUFDNUQsb0RBQWdEO0FBQ2hELDBEQUFzRDtBQUN0RCxnRUFBZ0Y7QUFDaEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFFakQsc0VBQW9FO0FBQ3BFLHNEQUF1RTtBQUN2RSx3Q0FBcUQ7QUFFckQsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0NBQzNDLENBQUM7QUFvQkY7SUFBQTtJQUVBLENBQUM7SUFGWSxXQUFXO1FBbEJ2QixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osZ0NBQWM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7Z0JBQ25CLDBDQUE0QjtnQkFDNUIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUMxQztZQUNELFNBQVMsRUFBRTtnQkFDVCw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZixzQkFBUzthQUNWO1NBQ0YsQ0FBQztPQUNXLFdBQVcsQ0FFdkI7SUFBRCxrQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhJbnRlcmNlcHRvcn0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuL3NlcnZpY2VzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwifi9sb2dpbi9jb250YWluZXJzL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge3BhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9naW5Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIExvZ2luU2VydmljZSxcbiAgICBBdXRoSW50ZXJjZXB0b3IsXG4gICAgQXV0aEd1YXJkLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7XG5cbn1cbiJdfQ==