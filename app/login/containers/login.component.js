"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var login_service_1 = require("../services/login.service");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, fb) {
        this.loginService = loginService;
        this.fb = fb;
        console.log('login component');
        this.signInForm = this.fb.group({
            username: [null, [
                    forms_1.Validators.required,
                ]],
            password: [null, [
                    forms_1.Validators.required,
                ]],
        });
    }
    LoginComponent.prototype.signIn = function () {
        var _a = this.signInForm.value, username = _a.username, password = _a.password;
        this.loginService.signIn(username, password);
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [login_service_1.LoginService,
            forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF5RDtBQUN6RCxzQ0FBMEM7QUFDMUMsd0NBQW9FO0FBUXBFO0lBR0Usd0JBQW9CLFlBQTBCLEVBQzFCLEVBQWU7UUFEZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRTtvQkFDZixrQkFBVSxDQUFDLFFBQVE7aUJBQ3BCLENBQUM7WUFDRixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUU7b0JBQ2Ysa0JBQVUsQ0FBQyxRQUFRO2lCQUNwQixDQUFDO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDUSxJQUFBLDBCQUE0QyxFQUEzQyxzQkFBUSxFQUFFLHNCQUFRLENBQTBCO1FBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUvQyxDQUFDO0lBckJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7aURBSWtDLDRCQUFZO1lBQ3RCLG1CQUFXO09BSnhCLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIHNpZ25JbkZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIGNvbnNvbGUubG9nKCdsb2dpbiBjb21wb25lbnQnKTtcblxuICAgIHRoaXMuc2lnbkluRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdXNlcm5hbWU6IFtudWxsLCBbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICBdXSxcbiAgICAgIHBhc3N3b3JkOiBbbnVsbCwgW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgXV0sXG4gICAgfSk7XG4gIH1cblxuICBzaWduSW4oKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lLCBwYXNzd29yZH0gPSB0aGlzLnNpZ25JbkZvcm0udmFsdWU7XG4gICAgdGhpcy5sb2dpblNlcnZpY2Uuc2lnbkluKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cbiAgfVxufVxuXG4iXX0=