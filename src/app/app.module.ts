import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';

// pages
import { AppComponent } from './app.component';
import { DoComponent } from './pages/do/do.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ContactComponent } from './pages/contact/contact.component';

// components
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DoComponent,
    BuyComponent,
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
