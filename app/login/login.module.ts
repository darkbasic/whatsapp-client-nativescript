import {NgModule} from '@angular/core';
import {AuthInterceptor} from './services/auth.interceptor';
import {AuthGuard} from './services/auth.guard';
import {LoginService} from './services/login.service';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "~/app.routing";
import { Routes } from "@angular/router";
import { LoginComponent } from "~/login/containers/login.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  providers: [
    LoginService,
    AuthInterceptor,
    AuthGuard,
  ],
})
export class LoginModule {

}
