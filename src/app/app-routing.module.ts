import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoComponent } from '@pages/do/do.component';
import { BuyComponent } from '@pages/buy/buy.component';
import { ContactComponent } from '@pages/contact/contact.component';


const routes: Routes = [
  {
    path: 'do',
    component: DoComponent,
  },
  {
    path: 'buy',
    component: BuyComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: DoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
