import { Component, Input } from '@angular/core';
import { VgControlsHidden } from 'videogular2/core';

@Component({
  selector: 'welcome-animation',
  templateUrl: './welcome-animation.component.html',
  styleUrls: ['./welcome-animation.component.scss']
})
export class WelcomeAnimationComponent  {
  constructor(private controlsHidden: VgControlsHidden){
    
  }

}
