import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'credit', loadChildren: './credit/credit.module#CreditPageModule' },
  { path: 'qrcode', loadChildren: './qrcode/qrcode.module#QrcodePageModule' },
  { path: 'enets', loadChildren: './enets/enets.module#EnetsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'item', loadChildren: './item/item.module#ItemPageModule' },
  { path: 'bank', loadChildren: './bank/bank.module#BankPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
