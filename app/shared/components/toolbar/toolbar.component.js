"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-toolbar',
            moduleId: module.id,
            template: "\n    <!--<mat-toolbar>\n      <div class=\"left-block\">\n        <ng-content select=\".navigation\"></ng-content>\n        <ng-content select=\".title\"></ng-content>\n      </div>\n      <ng-content select=\".menu\"></ng-content>\n    </mat-toolbar>-->\n  ",
            styleUrls: ['./toolbar.component.css']
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBd0M7QUFnQnhDO0lBQUE7SUFFQSxDQUFDO0lBRlksZ0JBQWdCO1FBZDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFRQVFUO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQztPQUNXLGdCQUFnQixDQUU1QjtJQUFELHVCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9vbGJhcicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLTxtYXQtdG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5uYXZpZ2F0aW9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCIudGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5tZW51XCI+PC9uZy1jb250ZW50PlxuICAgIDwvbWF0LXRvb2xiYXI+LS0+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQge1xuXG59XG4iXX0=