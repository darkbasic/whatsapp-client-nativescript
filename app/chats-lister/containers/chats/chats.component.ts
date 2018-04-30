import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ChatsService } from '~/services/chats.service';
import { GetChats } from "~/types";

@Component({
  moduleId: module.id,
  template: `
    <!--<app-toolbar>
      <div class="title">Whatsapp Clone</div>
      <button mat-icon-button [matMenuTriggerFor]="menu" class="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
    </app-toolbar>

    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <mat-icon>dialpad</mat-icon>
        <span>Redial</span>
      </button>
      <button mat-menu-item disabled>
        <mat-icon>voicemail</mat-icon>
        <span>Check voicemail</span>
      </button>
      <button mat-menu-item>
        <mat-icon>notifications_off</mat-icon>
        <span>Disable alerts</span>
      </button>
    </mat-menu>

    <app-chats-list [items]="chats$ | async"
                    appSelectableList="both"
                    (single)="goToChat($event)" (multiple)="deleteChats($event)" (isSelecting)="isSelecting = $event">
      <app-confirm-selection #confirmSelection></app-confirm-selection>
    </app-chats-list>

    <button *ngIf="!isSelecting" class="chat-button" mat-fab color="primary" (click)="goToNewChat()">
      <mat-icon aria-label="Icon-button with a + icon">add</mat-icon>
    </button>-->

    <app-chats-list [items]="chats$ | async" appSelectableList="both" [selectionConfirmed]="selectionConfirmed"
                    (single)="goToChat($event)" (multiple)="deleteChats($event)" (isSelecting)="isSelecting = $event">
        <app-confirm-selection #confirmSelection (emitClick)="selectionConfirmed.emit(null)"></app-confirm-selection>
    </app-chats-list>
  `,
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  chats$: Observable<GetChats.Chats[]>;
  isSelecting = false;
  selectionConfirmed = new EventEmitter<null>();

  constructor(private chatsService: ChatsService,
              private router: Router) {
  }

  ngOnInit() {
    this.chats$ = this.chatsService.getChats().chats$;
  }

  goToChat(chatId: string) {
    console.log('single');
    this.router.navigate(['/chat', chatId]);
  }

  goToNewChat() {
    this.router.navigate(['/new-chat']);
  }

  deleteChats(chatIds: string[]) {
    console.log('multiple');
    /*chatIds.forEach(chatId => {
      this.chatsService.removeChat(chatId).subscribe();
    });*/
  }
}
