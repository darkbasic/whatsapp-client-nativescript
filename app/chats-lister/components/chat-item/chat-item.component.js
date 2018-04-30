"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ChatItemComponent = /** @class */ (function () {
    function ChatItemComponent() {
    }
    ChatItemComponent.prototype.onTap = function () {
        console.log('This is from stacklayout tap!');
    };
    tslib_1.__decorate([
        core_1.Input('item'),
        tslib_1.__metadata("design:type", Object)
    ], ChatItemComponent.prototype, "chat", void 0);
    ChatItemComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-chat-item',
            moduleId: module.id,
            template: "\n    <!--<div class=\"chat-row\">\n        <div class=\"chat-recipient\">\n          <img *ngIf=\"chat.picture\" [src]=\"chat.picture\" width=\"48\" height=\"48\">\n          <div>{{ chat.name }} [id: {{ chat.id }}]</div>\n        </div>\n        <div class=\"chat-content\">{{ chat.messages[chat.messages.length - 1]?.content | truncate : 20 : '...' }}</div>\n    </div>-->\n\n    <Label class=\"h3 p-15\" [text]=\"chat?.name\" textWrap=\"true\"></Label>\n  ",
            styleUrls: ['chat-item.component.css'],
        })
    ], ChatItemComponent);
    return ChatItemComponent;
}());
exports.ChatItemComponent = ChatItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXFFO0FBbUJyRTtJQUFBO0lBUUEsQ0FBQztJQUhDLGlDQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUpEO1FBREMsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7bURBQ087SUFIVixpQkFBaUI7UUFoQjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDhjQVVUO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQztPQUNXLGlCQUFpQixDQVE3QjtJQUFELHdCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXRDaGF0cyB9IGZyb20gXCJ+L3R5cGVzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jaGF0LWl0ZW0nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS08ZGl2IGNsYXNzPVwiY2hhdC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtcmVjaXBpZW50XCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cImNoYXQucGljdHVyZVwiIFtzcmNdPVwiY2hhdC5waWN0dXJlXCIgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCI+XG4gICAgICAgICAgPGRpdj57eyBjaGF0Lm5hbWUgfX0gW2lkOiB7eyBjaGF0LmlkIH19XTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtY29udGVudFwiPnt7IGNoYXQubWVzc2FnZXNbY2hhdC5tZXNzYWdlcy5sZW5ndGggLSAxXT8uY29udGVudCB8IHRydW5jYXRlIDogMjAgOiAnLi4uJyB9fTwvZGl2PlxuICAgIDwvZGl2Pi0tPlxuXG4gICAgPExhYmVsIGNsYXNzPVwiaDMgcC0xNVwiIFt0ZXh0XT1cImNoYXQ/Lm5hbWVcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICBgLFxuICBzdHlsZVVybHM6IFsnY2hhdC1pdGVtLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdEl0ZW1Db21wb25lbnQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnaXRlbScpXG4gIGNoYXQ6IEdldENoYXRzLkNoYXRzO1xuXG4gIG9uVGFwKCkge1xuICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGZyb20gc3RhY2tsYXlvdXQgdGFwIScpO1xuICB9XG59XG4iXX0=