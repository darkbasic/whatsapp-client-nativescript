import { Component, Input } from '@angular/core';
import { SelectableListDirective } from "ngx-selectable-list";
import { GetChat } from "~/types";

@Component({
  selector: 'app-messages-list',
  moduleId: module.id,
  template: `
    <!--<mat-list>
      <mat-list-item *ngFor="let message of messages">
        <app-message-item [item]="message" [isGroup]="isGroup"
                          appSelectableItem></app-message-item>
      </mat-list-item>
    </mat-list>
    <ng-content *ngIf="selectableListDirective.selecting"></ng-content>-->

    <StackLayout>
        <ListView [items]="messages">
            <ng-template let-message="item" let-i="index">
                <StackLayout appSelectableItem [item]="message">
                    <app-message-item [item]="message"></app-message-item>
                </StackLayout>
            </ng-template>
        </ListView>

        <ng-content *ngIf="selectableListDirective.selecting"></ng-content>
    </StackLayout>
  `,
  styleUrls: ['messages-list.component.css'],
})
export class MessagesListComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('items')
  messages: GetChat.Messages[];

  @Input()
  isGroup: boolean;

  constructor(public selectableListDirective: SelectableListDirective) {}
}
