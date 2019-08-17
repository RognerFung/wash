import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

  constructor(
    public popoverController: PopoverController
  ) {}

  close() {
    this.popoverController.dismiss()
  }

}
