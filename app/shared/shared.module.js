"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var toolbar_component_1 = require("./components/toolbar/toolbar.component");
var forms_1 = require("@angular/forms");
var confirm_selection_component_1 = require("./components/confirm-selection/confirm-selection.component");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("~/app.routing");
var forms_2 = require("nativescript-angular/forms");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                toolbar_component_1.ToolbarComponent,
                confirm_selection_component_1.ConfirmSelectionComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_2.NativeScriptFormsModule,
                forms_1.ReactiveFormsModule,
                http_client_1.NativeScriptHttpClientModule,
            ],
            providers: [],
            exports: [
                toolbar_component_1.ToolbarComponent,
                confirm_selection_component_1.ConfirmSelectionComponent,
            ],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXlDO0FBQ3pDLDRFQUEwRTtBQUMxRSx3Q0FBcUQ7QUFDckQsMEdBQXVHO0FBQ3ZHLGdFQUFnRjtBQUNoRixnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELG9EQUFxRTtBQXFCckU7SUFBQTtJQUNBLENBQUM7SUFEWSxZQUFZO1FBbkJ4QixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osb0NBQWdCO2dCQUNoQix1REFBeUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQiwwQ0FBNEI7YUFFN0I7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxvQ0FBZ0I7Z0JBQ2hCLHVEQUF5QjthQUMxQjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbmZpcm1TZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlybS1zZWxlY3Rpb24vY29uZmlybS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvb2xiYXJDb21wb25lbnQsXG4gICAgQ29uZmlybVNlbGVjdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAvL05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbXG4gICAgVG9vbGJhckNvbXBvbmVudCxcbiAgICBDb25maXJtU2VsZWN0aW9uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xufVxuIl19