import { Component } from '@angular/core';
import { ToastController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage {

  constructor(
    public toastController: ToastController,
    public popoverController: PopoverController
  ) { }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Add Value Successfully',
      duration: 3000,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'OK'
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
