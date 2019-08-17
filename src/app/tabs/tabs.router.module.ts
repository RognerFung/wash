import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ListPage } from '../list/list.page';
import { ItemPage } from '../item/item.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(list:list)',
        pathMatch: 'full',
      },
      {
        path: 'list',
        outlet: 'list',
        component: ListPage
      },
      {
        path: 'item',
        outlet: 'list',
        component: ItemPage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(list:list)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
