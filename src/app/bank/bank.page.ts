import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage {

  name: string;

  constructor(
    private route: ActivatedRoute,
    public popoverController: PopoverController
  ) {
    this.route.queryParams
    .subscribe(params => {
      if (params) {
        this.name = Object.keys(params)[0];
      } else {
        this.name = 'wrong';
      }
    });
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
