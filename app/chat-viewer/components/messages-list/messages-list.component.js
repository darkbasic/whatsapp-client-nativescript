"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_selectable_list_1 = require("ngx-selectable-list");
var MessagesListComponent = /** @class */ (function () {
    function MessagesListComponent(selectableListDirective) {
        this.selectableListDirective = selectableListDirective;
    }
    tslib_1.__decorate([
        core_1.Input('items'),
        tslib_1.__metadata("design:type", Array)
    ], MessagesListComponent.prototype, "messages", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MessagesListComponent.prototype, "isGroup", void 0);
    MessagesListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-messages-list',
            moduleId: module.id,
            template: "\n    <!--<mat-list>\n      <mat-list-item *ngFor=\"let message of messages\">\n        <app-message-item [item]=\"message\" [isGroup]=\"isGroup\"\n                          appSelectableItem></app-message-item>\n      </mat-list-item>\n    </mat-list>\n    <ng-content *ngIf=\"selectableListDirective.selecting\"></ng-content>-->\n\n    <StackLayout>\n        <ListView [items]=\"messages\">\n            <ng-template let-message=\"item\" let-i=\"index\">\n                <StackLayout appSelectableItem [item]=\"message\">\n                    <app-message-item [item]=\"message\"></app-message-item>\n                </StackLayout>\n            </ng-template>\n        </ListView>\n\n        <ng-content *ngIf=\"selectableListDirective.selecting\"></ng-content>\n    </StackLayout>\n  ",
            styleUrls: ['messages-list.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [ngx_selectable_list_1.SelectableListDirective])
    ], MessagesListComponent);
    return MessagesListComponent;
}());
exports.MessagesListComponent = MessagesListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBaUQ7QUFDakQsMkRBQThEO0FBNkI5RDtJQVFFLCtCQUFtQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUFHLENBQUM7SUFMdkU7UUFEQyxZQUFLLENBQUMsT0FBTyxDQUFDOzsyREFDYztJQUc3QjtRQURDLFlBQUssRUFBRTs7MERBQ1M7SUFOTixxQkFBcUI7UUExQmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc3hCQW9CVDtZQUNELFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7aURBUzRDLDZDQUF1QjtPQVJ4RCxxQkFBcUIsQ0FTakM7SUFBRCw0QkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdGFibGVMaXN0RGlyZWN0aXZlIH0gZnJvbSBcIm5neC1zZWxlY3RhYmxlLWxpc3RcIjtcbmltcG9ydCB7IEdldENoYXQgfSBmcm9tIFwifi90eXBlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVzc2FnZXMtbGlzdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLTxtYXQtbGlzdD5cbiAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XG4gICAgICAgIDxhcHAtbWVzc2FnZS1pdGVtIFtpdGVtXT1cIm1lc3NhZ2VcIiBbaXNHcm91cF09XCJpc0dyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2VsZWN0YWJsZUl0ZW0+PC9hcHAtbWVzc2FnZS1pdGVtPlxuICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgIDwvbWF0LWxpc3Q+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJzZWxlY3RhYmxlTGlzdERpcmVjdGl2ZS5zZWxlY3RpbmdcIj48L25nLWNvbnRlbnQ+LS0+XG5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtbWVzc2FnZT1cIml0ZW1cIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGFwcFNlbGVjdGFibGVJdGVtIFtpdGVtXT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFwcC1tZXNzYWdlLWl0ZW0gW2l0ZW1dPVwibWVzc2FnZVwiPjwvYXBwLW1lc3NhZ2UtaXRlbT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9MaXN0Vmlldz5cblxuICAgICAgICA8bmctY29udGVudCAqbmdJZj1cInNlbGVjdGFibGVMaXN0RGlyZWN0aXZlLnNlbGVjdGluZ1wiPjwvbmctY29udGVudD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnbWVzc2FnZXMtbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzTGlzdENvbXBvbmVudCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdpdGVtcycpXG4gIG1lc3NhZ2VzOiBHZXRDaGF0Lk1lc3NhZ2VzW107XG5cbiAgQElucHV0KClcbiAgaXNHcm91cDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VsZWN0YWJsZUxpc3REaXJlY3RpdmU6IFNlbGVjdGFibGVMaXN0RGlyZWN0aXZlKSB7fVxufVxuIl19