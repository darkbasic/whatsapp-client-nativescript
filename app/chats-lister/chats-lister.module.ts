import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { ChatsComponent } from './containers/chats/chats.component';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { AuthGuard } from "~/login/services/auth.guard";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "~/app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ChatsService } from "~/services/chats.service";
import { SelectableListModule } from "ngx-selectable-list";
import { SharedModule } from "~/shared/shared.module";

const routes: Routes = [
  {path: '', redirectTo: 'chats', pathMatch: 'full'},
  {path: 'chats', canActivate: [AuthGuard], component: ChatsComponent},
];

@NgModule({
  declarations: [
    ChatsComponent,
    ChatsListComponent,
    ChatItemComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule.forChild(routes),
    SelectableListModule,
    SharedModule,
  ],
  providers: [
    ChatsService,
  ],
})
export class ChatsListerModule {
}
