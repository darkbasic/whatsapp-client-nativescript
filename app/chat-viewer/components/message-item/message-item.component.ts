import { Component, Input } from '@angular/core';
import { GetChat } from "~/types";

@Component({
  selector: 'app-message-item',
  moduleId: module.id,
  template: `
    <!--<div class="message"
         [ngClass]="{'mine': message.ownership}">
      <div *ngIf="isGroup && !message.ownership" class="message-sender">{{ message.sender.name }}</div>
      <div>{{ message.content }}</div>
    </div>-->

    <Label class="h3 p-15" [text]="message.content" textWrap="true"></Label>
  `,
  styleUrls: ['message-item.component.css'],
})
export class MessageItemComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('item')
  message: GetChat.Messages;

  @Input()
  isGroup: boolean;
}
