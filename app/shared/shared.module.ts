import { NgModule } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmSelectionComponent } from './components/confirm-selection/confirm-selection.component';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "~/app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
  declarations: [
    ToolbarComponent,
    ConfirmSelectionComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptHttpClientModule,
    //NativeScriptRouterModule.forChild(routes),
  ],
  providers: [],
  exports: [
    ToolbarComponent,
    ConfirmSelectionComponent,
  ],
})
export class SharedModule {
}
