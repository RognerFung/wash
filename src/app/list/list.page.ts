import { Component } from '@angular/core';
import { Items } from '../../assets/mock/mock-wms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  
  id: string;
  item: any;
  items: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public popoverController: PopoverController
  ) {
    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
    });
    this.item = Items.filter(e => {
      return e.No == this.id;
    })[0];
    this.initializeItems();
  }

  ionViewDidEnter() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url.slice(-5) == "start") {
          this.id = val.url.slice(-12, -5);
          console.log(this.id);
          this.initializeItems();
        }
      }
  });
  }
  
  initializeItems() {
    this.items = Items;
    this.items.map(e => {
      if (e.No == this.id) {
        e.status = "occupied";
        e.endTime = 3600;
      }
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (
          item.No.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
          item.location.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
          item.status.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      })
    }
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
