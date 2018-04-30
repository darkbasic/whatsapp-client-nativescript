import { NgModule } from '@angular/core';
import { ChatComponent } from "~/chat-viewer/containers/chat/chat.component";
import { MessageItemComponent } from "~/chat-viewer/components/message-item/message-item.component";
import { MessagesListComponent } from "~/chat-viewer/components/messages-list/messages-list.component";
import { NewMessageComponent } from "~/chat-viewer/components/new-message/new-message.component";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule, NativeScriptRouterModule } from "nativescript-angular";
import { AppRoutingModule } from "~/app.routing";
import { AuthGuard } from "~/login/services/auth.guard";
import { Routes } from "@angular/router";
import { SelectableListModule } from "ngx-selectable-list";
import { SharedModule } from "~/shared/shared.module";

const routes: Routes = [
  {
    path: 'chat', children: [
      {path: ':id', canActivate: [AuthGuard], component: ChatComponent},
    ],
  },
];

@NgModule({
  declarations: [
    ChatComponent,
    MessagesListComponent,
    MessageItemComponent,
    NewMessageComponent,
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
  ],
})
export class ChatViewerModule {
}
