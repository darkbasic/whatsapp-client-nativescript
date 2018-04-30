import {Component, EventEmitter, Input, Output} from '@angular/core';
import { GetChats } from "~/types";

@Component({
  selector: 'app-chat-item',
  moduleId: module.id,
  template: `
    <!--<div class="chat-row">
        <div class="chat-recipient">
          <img *ngIf="chat.picture" [src]="chat.picture" width="48" height="48">
          <div>{{ chat.name }} [id: {{ chat.id }}]</div>
        </div>
        <div class="chat-content">{{ chat.messages[chat.messages.length - 1]?.content | truncate : 20 : '...' }}</div>
    </div>-->

    <Label class="h3 p-15" [text]="chat?.name" textWrap="true"></Label>
  `,
  styleUrls: ['chat-item.component.css'],
})
export class ChatItemComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('item')
  chat: GetChats.Chats;

  onTap() {
    console.log('This is from stacklayout tap!');
  }
}
