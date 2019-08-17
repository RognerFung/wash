import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { Items } from '../../assets/mock/mock-wms';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  id: string;
  item: any;
  date: string;

  constructor(
    private route: ActivatedRoute,
    public toastController: ToastController,
    public popoverController: PopoverController
  ) {
    this.route.queryParams
    .subscribe(params => {
      if (params) {
        this.id = Object.keys(params)[0];
        this.item = Items.filter(e => {
          return e.No == this.id;
        })[0];
      } else {
        this.id = 'wrong';
      }
    });
    let now = new Date();
    this.date = now.toISOString().slice(0, 10);
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Report Submitted',
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