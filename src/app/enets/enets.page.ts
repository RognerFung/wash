import { Component } from '@angular/core';
import { ToastController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-enets',
  templateUrl: './enets.page.html',
  styleUrls: ['./enets.page.scss'],
})
export class EnetsPage {

  constructor(
    public toastController: ToastController,
    public popoverController: PopoverController
  ) { }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Add Value Successfully',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
