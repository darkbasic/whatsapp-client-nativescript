import {Component} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  moduleId: module.id,
  template: `
    <!--<mat-toolbar>
      <div class="left-block">
        <ng-content select=".navigation"></ng-content>
        <ng-content select=".title"></ng-content>
      </div>
      <ng-content select=".menu"></ng-content>
    </mat-toolbar>-->
  `,
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

}
