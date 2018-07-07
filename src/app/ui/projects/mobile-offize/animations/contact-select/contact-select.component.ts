import { Component, Input } from '@angular/core';
import { VgControlsHidden } from 'videogular2/core';

@Component({
  selector: 'contact-select-animation',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.scss']
})
export class ContactSelectComponent  {
  constructor(private controlsHidden: VgControlsHidden){
    
  }
  @Input() name: string;
}
