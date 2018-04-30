"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chats_service_1 = require("~/services/chats.service");
var ChatsComponent = /** @class */ (function () {
    function ChatsComponent(chatsService, router) {
        this.chatsService = chatsService;
        this.router = router;
        this.isSelecting = false;
        this.selectionConfirmed = new core_1.EventEmitter();
    }
    ChatsComponent.prototype.ngOnInit = function () {
        this.chats$ = this.chatsService.getChats().chats$;
    };
    ChatsComponent.prototype.goToChat = function (chatId) {
        console.log('single');
        this.router.navigate(['/chat', chatId]);
    };
    ChatsComponent.prototype.goToNewChat = function () {
        this.router.navigate(['/new-chat']);
    };
    ChatsComponent.prototype.deleteChats = function (chatIds) {
        console.log('multiple');
        /*chatIds.forEach(chatId => {
          this.chatsService.removeChat(chatId).subscribe();
        });*/
    };
    ChatsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <!--<app-toolbar>\n      <div class=\"title\">Whatsapp Clone</div>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </app-toolbar>\n\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>\n        <mat-icon>dialpad</mat-icon>\n        <span>Redial</span>\n      </button>\n      <button mat-menu-item disabled>\n        <mat-icon>voicemail</mat-icon>\n        <span>Check voicemail</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>notifications_off</mat-icon>\n        <span>Disable alerts</span>\n      </button>\n    </mat-menu>\n\n    <app-chats-list [items]=\"chats$ | async\"\n                    appSelectableList=\"both\"\n                    (single)=\"goToChat($event)\" (multiple)=\"deleteChats($event)\" (isSelecting)=\"isSelecting = $event\">\n      <app-confirm-selection #confirmSelection></app-confirm-selection>\n    </app-chats-list>\n\n    <button *ngIf=\"!isSelecting\" class=\"chat-button\" mat-fab color=\"primary\" (click)=\"goToNewChat()\">\n      <mat-icon aria-label=\"Icon-button with a + icon\">add</mat-icon>\n    </button>-->\n\n    <app-chats-list [items]=\"chats$ | async\" appSelectableList=\"both\" [selectionConfirmed]=\"selectionConfirmed\"\n                    (single)=\"goToChat($event)\" (multiple)=\"deleteChats($event)\" (isSelecting)=\"isSelecting = $event\">\n        <app-confirm-selection #confirmSelection (emitClick)=\"selectionConfirmed.emit(null)\"></app-confirm-selection>\n    </app-chats-list>\n  ",
            styleUrls: ['./chats.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [chats_service_1.ChatsService,
            router_1.Router])
    ], ChatsComponent);
    return ChatsComponent;
}());
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE4RTtBQUU5RSwwQ0FBeUM7QUFDekMsMERBQXdEO0FBNkN4RDtJQUtFLHdCQUFvQixZQUEwQixFQUMxQixNQUFjO1FBRGQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpsQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQUk5QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDcEQsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWlCO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEI7O2FBRUs7SUFDUCxDQUFDO0lBM0JVLGNBQWM7UUExQzFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDJpREFxQ1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO2lEQU1rQyw0QkFBWTtZQUNsQixlQUFNO09BTnZCLGNBQWMsQ0E0QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9jaGF0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEdldENoYXRzIH0gZnJvbSBcIn4vdHlwZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLTxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPldoYXRzYXBwIENsb25lPC9kaXY+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvYXBwLXRvb2xiYXI+XG5cbiAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgIDxtYXQtaWNvbj5kaWFscGFkPC9tYXQtaWNvbj5cbiAgICAgICAgPHNwYW4+UmVkaWFsPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gZGlzYWJsZWQ+XG4gICAgICAgIDxtYXQtaWNvbj52b2ljZW1haWw8L21hdC1pY29uPlxuICAgICAgICA8c3Bhbj5DaGVjayB2b2ljZW1haWw8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnNfb2ZmPC9tYXQtaWNvbj5cbiAgICAgICAgPHNwYW4+RGlzYWJsZSBhbGVydHM8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC1tZW51PlxuXG4gICAgPGFwcC1jaGF0cy1saXN0IFtpdGVtc109XCJjaGF0cyQgfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICAgIGFwcFNlbGVjdGFibGVMaXN0PVwiYm90aFwiXG4gICAgICAgICAgICAgICAgICAgIChzaW5nbGUpPVwiZ29Ub0NoYXQoJGV2ZW50KVwiIChtdWx0aXBsZSk9XCJkZWxldGVDaGF0cygkZXZlbnQpXCIgKGlzU2VsZWN0aW5nKT1cImlzU2VsZWN0aW5nID0gJGV2ZW50XCI+XG4gICAgICA8YXBwLWNvbmZpcm0tc2VsZWN0aW9uICNjb25maXJtU2VsZWN0aW9uPjwvYXBwLWNvbmZpcm0tc2VsZWN0aW9uPlxuICAgIDwvYXBwLWNoYXRzLWxpc3Q+XG5cbiAgICA8YnV0dG9uICpuZ0lmPVwiIWlzU2VsZWN0aW5nXCIgY2xhc3M9XCJjaGF0LWJ1dHRvblwiIG1hdC1mYWIgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImdvVG9OZXdDaGF0KClcIj5cbiAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiSWNvbi1idXR0b24gd2l0aCBhICsgaWNvblwiPmFkZDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+LS0+XG5cbiAgICA8YXBwLWNoYXRzLWxpc3QgW2l0ZW1zXT1cImNoYXRzJCB8IGFzeW5jXCIgYXBwU2VsZWN0YWJsZUxpc3Q9XCJib3RoXCIgW3NlbGVjdGlvbkNvbmZpcm1lZF09XCJzZWxlY3Rpb25Db25maXJtZWRcIlxuICAgICAgICAgICAgICAgICAgICAoc2luZ2xlKT1cImdvVG9DaGF0KCRldmVudClcIiAobXVsdGlwbGUpPVwiZGVsZXRlQ2hhdHMoJGV2ZW50KVwiIChpc1NlbGVjdGluZyk9XCJpc1NlbGVjdGluZyA9ICRldmVudFwiPlxuICAgICAgICA8YXBwLWNvbmZpcm0tc2VsZWN0aW9uICNjb25maXJtU2VsZWN0aW9uIChlbWl0Q2xpY2spPVwic2VsZWN0aW9uQ29uZmlybWVkLmVtaXQobnVsbClcIj48L2FwcC1jb25maXJtLXNlbGVjdGlvbj5cbiAgICA8L2FwcC1jaGF0cy1saXN0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0cy5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2hhdHMkOiBPYnNlcnZhYmxlPEdldENoYXRzLkNoYXRzW10+O1xuICBpc1NlbGVjdGluZyA9IGZhbHNlO1xuICBzZWxlY3Rpb25Db25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGF0cyQgPSB0aGlzLmNoYXRzU2VydmljZS5nZXRDaGF0cygpLmNoYXRzJDtcbiAgfVxuXG4gIGdvVG9DaGF0KGNoYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ3NpbmdsZScpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoYXQnLCBjaGF0SWRdKTtcbiAgfVxuXG4gIGdvVG9OZXdDaGF0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL25ldy1jaGF0J10pO1xuICB9XG5cbiAgZGVsZXRlQ2hhdHMoY2hhdElkczogc3RyaW5nW10pIHtcbiAgICBjb25zb2xlLmxvZygnbXVsdGlwbGUnKTtcbiAgICAvKmNoYXRJZHMuZm9yRWFjaChjaGF0SWQgPT4ge1xuICAgICAgdGhpcy5jaGF0c1NlcnZpY2UucmVtb3ZlQ2hhdChjaGF0SWQpLnN1YnNjcmliZSgpO1xuICAgIH0pOyovXG4gIH1cbn1cbiJdfQ==