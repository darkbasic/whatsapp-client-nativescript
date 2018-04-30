"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var NewMessageComponent = /** @class */ (function () {
    function NewMessageComponent() {
        this.newMessage = new core_1.EventEmitter();
        this.message = '';
    }
    NewMessageComponent.prototype.onInputKeyup = function (_a) {
        var keyCode = _a.keyCode;
        if (keyCode === 13) {
            this.emitMessage();
        }
    };
    NewMessageComponent.prototype.emitMessage = function () {
        if (this.message && !this.disabled) {
            this.newMessage.emit(this.message);
            this.message = '';
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NewMessageComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], NewMessageComponent.prototype, "newMessage", void 0);
    NewMessageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-new-message',
            moduleId: module.id,
            template: "\n    <!--<input type=\"text\" [(ngModel)]=\"message\" (keyup)=\"onInputKeyup($event)\"/>\n    <button mat-button (click)=\"emitMessage()\" [disabled]=\"disabled\">\n      <mat-icon aria-label=\"Icon-button with a send icon\">send</mat-icon>\n    </button>-->\n\n    <TextField [(ngModel)]=\"message\"\n               returnKeyType=\"done\"\n               (returnPress)=\"emitMessage()\"\n               class=\"input input-border\"></TextField>\n    <Button class=\"btn btn-primary btn-active\" id=\"button\" text=\"Send\" (tap)=\"emitMessage()\"></Button>\n  ",
            styleUrls: ['new-message.component.css'],
        })
    ], NewMessageComponent);
    return NewMessageComponent;
}());
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFxRTtBQW1CckU7SUFqQkE7UUFzQkUsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBRXhDLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFjZixDQUFDO0lBWkMsMENBQVksR0FBWixVQUFhLEVBQTBCO1lBQXhCLG9CQUFPO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBbEJEO1FBREMsWUFBSyxFQUFFOzt5REFDVTtJQUdsQjtRQURDLGFBQU0sRUFBRTs7MkRBQytCO0lBTDdCLG1CQUFtQjtRQWpCL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvakJBV1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO09BQ1csbUJBQW1CLENBcUIvQjtJQUFELDBCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uZXctbWVzc2FnZScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLTxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibWVzc2FnZVwiIChrZXl1cCk9XCJvbklucHV0S2V5dXAoJGV2ZW50KVwiLz5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImVtaXRNZXNzYWdlKClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiSWNvbi1idXR0b24gd2l0aCBhIHNlbmQgaWNvblwiPnNlbmQ8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPi0tPlxuXG4gICAgPFRleHRGaWVsZCBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIlxuICAgICAgICAgICAgICAgKHJldHVyblByZXNzKT1cImVtaXRNZXNzYWdlKClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dCBpbnB1dC1ib3JkZXJcIj48L1RleHRGaWVsZD5cbiAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiBpZD1cImJ1dHRvblwiIHRleHQ9XCJTZW5kXCIgKHRhcCk9XCJlbWl0TWVzc2FnZSgpXCI+PC9CdXR0b24+XG4gIGAsXG4gIHN0eWxlVXJsczogWyduZXctbWVzc2FnZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5ld01lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgbmV3TWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG1lc3NhZ2UgPSAnJztcblxuICBvbklucHV0S2V5dXAoeyBrZXlDb2RlIH06IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuZW1pdE1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBlbWl0TWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm5ld01lc3NhZ2UuZW1pdCh0aGlzLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgfVxuICB9XG59XG4iXX0=