import { Component, Input } from '@angular/core';
import { GetChats } from "~/types";
import { SelectableListDirective } from "ngx-selectable-list";

@Component({
  selector: 'app-chats-list',
  moduleId: module.id,
  template: `
    <!--<mat-list>
      <mat-list-item *ngFor="let chat of chats">
        <app-chat-item [item]="chat"
                       appSelectableItem></app-chat-item>
      </mat-list-item>
    </mat-list>
    <ng-content *ngIf="selectableListDirective.selecting"></ng-content>-->

    <StackLayout>
      <ListView [items]="chats">
        <ng-template let-chat="item" let-i="index">
            <StackLayout appSelectableItem [item]="chat">
              <app-chat-item [item]="chat"></app-chat-item>
            </StackLayout>
        </ng-template>
      </ListView>
  
      <ng-content *ngIf="selectableListDirective.selecting"></ng-content>
    </StackLayout>
  `,
  styleUrls: ['chats-list.component.css'],
})
export class ChatsListComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('items')
  chats: GetChats.Chats[];

  constructor(public selectableListDirective: SelectableListDirective) {}
}
