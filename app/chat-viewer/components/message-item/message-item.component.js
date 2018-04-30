"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent() {
    }
    tslib_1.__decorate([
        core_1.Input('item'),
        tslib_1.__metadata("design:type", Object)
    ], MessageItemComponent.prototype, "message", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MessageItemComponent.prototype, "isGroup", void 0);
    MessageItemComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-message-item',
            moduleId: module.id,
            template: "\n    <!--<div class=\"message\"\n         [ngClass]=\"{'mine': message.ownership}\">\n      <div *ngIf=\"isGroup && !message.ownership\" class=\"message-sender\">{{ message.sender.name }}</div>\n      <div>{{ message.content }}</div>\n    </div>-->\n\n    <Label class=\"h3 p-15\" [text]=\"message.content\" textWrap=\"true\"></Label>\n  ",
            styleUrls: ['message-item.component.css'],
        })
    ], MessageItemComponent);
    return MessageItemComponent;
}());
exports.MessageItemComponent = MessageItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWlEO0FBaUJqRDtJQUFBO0lBT0EsQ0FBQztJQUpDO1FBREMsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7eURBQ1k7SUFHMUI7UUFEQyxZQUFLLEVBQUU7O3lEQUNTO0lBTk4sb0JBQW9CO1FBZGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscVZBUVQ7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO09BQ1csb0JBQW9CLENBT2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXRDaGF0IH0gZnJvbSBcIn4vdHlwZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2UtaXRlbScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLTxkaXYgY2xhc3M9XCJtZXNzYWdlXCJcbiAgICAgICAgIFtuZ0NsYXNzXT1cInsnbWluZSc6IG1lc3NhZ2Uub3duZXJzaGlwfVwiPlxuICAgICAgPGRpdiAqbmdJZj1cImlzR3JvdXAgJiYgIW1lc3NhZ2Uub3duZXJzaGlwXCIgY2xhc3M9XCJtZXNzYWdlLXNlbmRlclwiPnt7IG1lc3NhZ2Uuc2VuZGVyLm5hbWUgfX08L2Rpdj5cbiAgICAgIDxkaXY+e3sgbWVzc2FnZS5jb250ZW50IH19PC9kaXY+XG4gICAgPC9kaXY+LS0+XG5cbiAgICA8TGFiZWwgY2xhc3M9XCJoMyBwLTE1XCIgW3RleHRdPVwibWVzc2FnZS5jb250ZW50XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJ21lc3NhZ2UtaXRlbS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJdGVtQ29tcG9uZW50IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2l0ZW0nKVxuICBtZXNzYWdlOiBHZXRDaGF0Lk1lc3NhZ2VzO1xuXG4gIEBJbnB1dCgpXG4gIGlzR3JvdXA6IGJvb2xlYW47XG59XG4iXX0=