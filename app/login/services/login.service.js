"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var base64 = require("base-64");
var LoginService = /** @class */ (function () {
    function LoginService(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
    }
    LoginService.prototype.storeAuthHeader = function (auth) {
        application_settings_1.setString('Authorization', auth);
    };
    LoginService.prototype.getAuthHeader = function () {
        return application_settings_1.getString('Authorization');
    };
    LoginService.prototype.storeUser = function (user) {
        application_settings_1.setString('user', JSON.stringify(user));
    };
    LoginService.prototype.getUser = function () {
        return JSON.parse(application_settings_1.getString('user'));
    };
    LoginService.prototype.signIn = function (username, password) {
        var _this = this;
        var auth = "Basic " + base64.encode(username + ":" + password);
        this.http.post(this.api, null, {
            headers: {
                Authorization: auth,
            }
        }).subscribe(function (user) {
            _this.storeAuthHeader(auth);
            _this.storeUser(user);
            _this.router.navigate(['/chats']);
        }, function (err) { return console.error(err); });
    };
    LoginService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(2, core_1.Inject('signin')),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router, String])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQXlDO0FBQ3pDLDZDQUFrRDtBQUNsRCxzQ0FBbUQ7QUFDbkQsNkRBQTREO0FBRTVELGdDQUFtQztBQUduQztJQUVFLHNCQUFvQixJQUFnQixFQUNoQixNQUFjLEVBQ0ksR0FBVztRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDSSxRQUFHLEdBQUgsR0FBRyxDQUFRO0lBQUksQ0FBQztJQUV0RCxzQ0FBZSxHQUFmLFVBQWdCLElBQVk7UUFDMUIsZ0NBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQVU7UUFDbEIsZ0NBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sUUFBZ0IsRUFBRSxRQUFnQjtRQUF6QyxpQkFXQztRQVZDLElBQU0sSUFBSSxHQUFHLFdBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBSSxRQUFRLFNBQUksUUFBVSxDQUFHLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7WUFDN0IsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxJQUFJO2FBQ3BCO1NBQ0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVU7WUFDdEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDaEMsQ0FBQztJQWpDVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7UUFLRSxtQkFBQSxhQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7aURBRkgsaUJBQVU7WUFDUixlQUFNO09BSHZCLFlBQVksQ0FrQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L3R5cGVzXCI7XG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgQEluamVjdCgnc2lnbmluJykgcHJpdmF0ZSBhcGk6IHN0cmluZykgeyB9XG5cbiAgc3RvcmVBdXRoSGVhZGVyKGF1dGg6IHN0cmluZykge1xuICAgIHNldFN0cmluZygnQXV0aG9yaXphdGlvbicsIGF1dGgpO1xuICB9XG5cbiAgZ2V0QXV0aEhlYWRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRTdHJpbmcoJ0F1dGhvcml6YXRpb24nKTtcbiAgfVxuXG4gIHN0b3JlVXNlcih1c2VyOiBVc2VyKSB7XG4gICAgc2V0U3RyaW5nKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICB9XG5cbiAgZ2V0VXNlcigpOiBVc2VyIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRTdHJpbmcoJ3VzZXInKSk7XG4gIH1cblxuICBzaWduSW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIGNvbnN0IGF1dGggPSBgQmFzaWMgJHtiYXNlNjQuZW5jb2RlKGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWApfWA7XG4gICAgdGhpcy5odHRwLnBvc3QodGhpcy5hcGksIG51bGwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aCxcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgIHRoaXMuc3RvcmVBdXRoSGVhZGVyKGF1dGgpO1xuICAgICAgdGhpcy5zdG9yZVVzZXIodXNlcik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGF0cyddKTtcbiAgICB9LCBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxufVxuIl19