"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ConfirmSelectionComponent = /** @class */ (function () {
    function ConfirmSelectionComponent() {
        this.icon = 'delete';
        this.emitClick = new core_1.EventEmitter();
    }
    ConfirmSelectionComponent.prototype.handleClick = function () {
        this.emitClick.emit();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ConfirmSelectionComponent.prototype, "icon", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ConfirmSelectionComponent.prototype, "emitClick", void 0);
    ConfirmSelectionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-confirm-selection',
            moduleId: module.id,
            template: "\n    <!--<button mat-fab color=\"primary\" (click)=\"handleClick()\">\n      <mat-icon aria-label=\"Icon-button\">{{ icon }}</mat-icon>\n    </button>-->\n\n    <Button class=\"btn btn-primary btn-active\" id=\"button\" [text]=\"icon\" (tap)=\"handleClick()\"></Button>\n  ",
            styleUrls: ['./confirm-selection.component.css'],
        })
    ], ConfirmSelectionComponent);
    return ConfirmSelectionComponent;
}());
exports.ConfirmSelectionComponent = ConfirmSelectionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlybS1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFxRTtBQWNyRTtJQVpBO1FBY0UsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUVoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFLdkMsQ0FBQztJQUhDLCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFORDtRQURDLFlBQUssRUFBRTs7MkRBQ1E7SUFFaEI7UUFEQyxhQUFNLEVBQUU7O2dFQUM0QjtJQUoxQix5QkFBeUI7UUFackMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvUkFNVDtZQUNELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ2pELENBQUM7T0FDVyx5QkFBeUIsQ0FTckM7SUFBRCxnQ0FBQztDQUFBLEFBVEQsSUFTQztBQVRZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29uZmlybS1zZWxlY3Rpb24nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS08YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImhhbmRsZUNsaWNrKClcIj5cbiAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiSWNvbi1idXR0b25cIj57eyBpY29uIH19PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj4tLT5cblxuICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVwiIGlkPVwiYnV0dG9uXCIgW3RleHRdPVwiaWNvblwiICh0YXApPVwiaGFuZGxlQ2xpY2soKVwiPjwvQnV0dG9uPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1TZWxlY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBpY29uID0gJ2RlbGV0ZSc7XG4gIEBPdXRwdXQoKVxuICBlbWl0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5lbWl0Q2xpY2suZW1pdCgpO1xuICB9XG59XG4iXX0=