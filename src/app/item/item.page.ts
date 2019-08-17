import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, NavController, PopoverController } from '@ionic/angular';
import { Items } from '../../assets/mock/mock-wms';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  id: string;
  err: boolean;
  item: any;

  constructor(
    private zone: NgZone,
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public navCtrl: NavController,
    public popoverController: PopoverController
  ) {
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      if (params) {
        this.err = false;
        this.id = params.id;
        this.item = Items.filter(e => {
          return e.No == this.id;
        })[0];
      } else {
        this.err = true;
        this.id = 'wrong';
      }
    });
    console.log(this.id);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pay $1 to start machine',
      buttons: [{
        text: 'Use Coins $10',
        icon: 'folder-open',
        handler: () => {
          this.presentAlert()
        }
      }, {
        text: 'Add Value First',
        icon: 'add',
        handler: () => {
          this.navCtrl.navigateForward("/tabs/(about:about)");
        }
      }, {
        text: 'One Time Pay',
        icon: 'card',
        handler: () => {
          this.presentPayActionSheet();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentPayActionSheet() {
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

  async presentAlert() {
    let now = new Date;
    let later = new Date();
    later.setHours(now.getHours() + 1);
    let endTime = later.toTimeString().slice(0, 8);
    const alert = await this.alertController.create({
      header: 'Machine Started',
      subHeader: 'Coins -$1',
      message: 'Washing will end at ' + endTime + '. We will send you a message then. If any problems please report to us',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.zone.run(async () => {
            await this.navCtrl.navigateForward("/tabs/(list:list)?id=" + this.id + "start");
          });
        }
      }]
    });
    await alert.present();
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
