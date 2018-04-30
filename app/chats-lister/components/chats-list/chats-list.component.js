"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_selectable_list_1 = require("ngx-selectable-list");
var ChatsListComponent = /** @class */ (function () {
    function ChatsListComponent(selectableListDirective) {
        this.selectableListDirective = selectableListDirective;
    }
    tslib_1.__decorate([
        core_1.Input('items'),
        tslib_1.__metadata("design:type", Array)
    ], ChatsListComponent.prototype, "chats", void 0);
    ChatsListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-chats-list',
            moduleId: module.id,
            template: "\n    <!--<mat-list>\n      <mat-list-item *ngFor=\"let chat of chats\">\n        <app-chat-item [item]=\"chat\"\n                       appSelectableItem></app-chat-item>\n      </mat-list-item>\n    </mat-list>\n    <ng-content *ngIf=\"selectableListDirective.selecting\"></ng-content>-->\n\n    <StackLayout>\n      <ListView [items]=\"chats\">\n        <ng-template let-chat=\"item\" let-i=\"index\">\n            <StackLayout appSelectableItem [item]=\"chat\">\n              <app-chat-item [item]=\"chat\"></app-chat-item>\n            </StackLayout>\n        </ng-template>\n      </ListView>\n  \n      <ng-content *ngIf=\"selectableListDirective.selecting\"></ng-content>\n    </StackLayout>\n  ",
            styleUrls: ['chats-list.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [ngx_selectable_list_1.SelectableListDirective])
    ], ChatsListComponent);
    return ChatsListComponent;
}());
exports.ChatsListComponent = ChatsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0cy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBaUQ7QUFFakQsMkRBQThEO0FBNEI5RDtJQUtFLDRCQUFtQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUFHLENBQUM7SUFGdkU7UUFEQyxZQUFLLENBQUMsT0FBTyxDQUFDOztxREFDUztJQUhiLGtCQUFrQjtRQTFCOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrc0JBb0JUO1lBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQztpREFNNEMsNkNBQXVCO09BTHhELGtCQUFrQixDQU05QjtJQUFELHlCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2V0Q2hhdHMgfSBmcm9tIFwifi90eXBlc1wiO1xuaW1wb3J0IHsgU2VsZWN0YWJsZUxpc3REaXJlY3RpdmUgfSBmcm9tIFwibmd4LXNlbGVjdGFibGUtbGlzdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdHMtbGlzdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLTxtYXQtbGlzdD5cbiAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBjaGF0IG9mIGNoYXRzXCI+XG4gICAgICAgIDxhcHAtY2hhdC1pdGVtIFtpdGVtXT1cImNoYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICBhcHBTZWxlY3RhYmxlSXRlbT48L2FwcC1jaGF0LWl0ZW0+XG4gICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgPC9tYXQtbGlzdD5cbiAgICA8bmctY29udGVudCAqbmdJZj1cInNlbGVjdGFibGVMaXN0RGlyZWN0aXZlLnNlbGVjdGluZ1wiPjwvbmctY29udGVudD4tLT5cblxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVwiY2hhdHNcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jaGF0PVwiaXRlbVwiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBhcHBTZWxlY3RhYmxlSXRlbSBbaXRlbV09XCJjaGF0XCI+XG4gICAgICAgICAgICAgIDxhcHAtY2hhdC1pdGVtIFtpdGVtXT1cImNoYXRcIj48L2FwcC1jaGF0LWl0ZW0+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9MaXN0Vmlldz5cbiAgXG4gICAgICA8bmctY29udGVudCAqbmdJZj1cInNlbGVjdGFibGVMaXN0RGlyZWN0aXZlLnNlbGVjdGluZ1wiPjwvbmctY29udGVudD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnY2hhdHMtbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRzTGlzdENvbXBvbmVudCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdpdGVtcycpXG4gIGNoYXRzOiBHZXRDaGF0cy5DaGF0c1tdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZWxlY3RhYmxlTGlzdERpcmVjdGl2ZTogU2VsZWN0YWJsZUxpc3REaXJlY3RpdmUpIHt9XG59XG4iXX0=