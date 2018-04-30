import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-selection',
  moduleId: module.id,
  template: `
    <!--<button mat-fab color="primary" (click)="handleClick()">
      <mat-icon aria-label="Icon-button">{{ icon }}</mat-icon>
    </button>-->

    <Button class="btn btn-primary btn-active" id="button" [text]="icon" (tap)="handleClick()"></Button>
  `,
  styleUrls: ['./confirm-selection.component.css'],
})
export class ConfirmSelectionComponent {
  @Input()
  icon = 'delete';
  @Output()
  emitClick = new EventEmitter<null>();

  handleClick() {
    this.emitClick.emit();
  }
}
