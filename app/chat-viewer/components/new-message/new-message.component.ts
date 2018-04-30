import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-new-message',
  moduleId: module.id,
  template: `
    <!--<input type="text" [(ngModel)]="message" (keyup)="onInputKeyup($event)"/>
    <button mat-button (click)="emitMessage()" [disabled]="disabled">
      <mat-icon aria-label="Icon-button with a send icon">send</mat-icon>
    </button>-->

    <TextField [(ngModel)]="message"
               returnKeyType="done"
               (returnPress)="emitMessage()"
               class="input input-border"></TextField>
    <Button class="btn btn-primary btn-active" id="button" text="Send" (tap)="emitMessage()"></Button>
  `,
  styleUrls: ['new-message.component.css'],
})
export class NewMessageComponent {
  @Input()
  disabled: boolean;

  @Output()
  newMessage = new EventEmitter<string>();

  message = '';

  onInputKeyup({ keyCode }: KeyboardEvent) {
    if (keyCode === 13) {
      this.emitMessage();
    }
  }

  emitMessage() {
    if (this.message && !this.disabled) {
      this.newMessage.emit(this.message);
      this.message = '';
    }
  }
}
