import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-fix',
  templateUrl: './input-fix.component.html',
  styleUrls: ['./input-fix.component.css']
})
export class InputFixComponent {
 @Input() inputFix: string = '';

}
