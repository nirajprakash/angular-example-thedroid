import { Component, Input } from '@angular/core';
import { VgControlsHidden } from 'videogular2/core';

@Component({
  selector: 'task-swipe-animation',
  templateUrl: './task-swipe.component.html',
  styleUrls: ['./task-swipe.component.scss']
})
export class TaskSwipeAnimationComponent  {
  constructor(private controlsHidden: VgControlsHidden){
    
  }
  @Input() name: string;
}
