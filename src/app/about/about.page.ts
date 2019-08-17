import { Component } from '@angular/core';
import { ActionSheetController, NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  amount: number;

  constructor(
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    public popoverController: PopoverController
  ) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Payment Method',
      buttons: [{
        text: 'eNETS',
        icon: 'logo-usd',
        handler: () => {
          this.navCtrl.navigateForward("/enets");
        }
      }, {
        text: 'Credit Card',
        icon: 'card',
        handler: () => {
          this.navCtrl.navigateForward("/credit");
        }
      }, {
        text: 'QR Code',
        icon: 'qr-scanner',
        handler: () => {
          this.navCtrl.navigateForward("/qrcode");
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelled');
        }
      }]
    });
    await actionSheet.present();
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
