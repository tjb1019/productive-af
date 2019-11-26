import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// routing
import { AppRoutingModule } from './app-routing.module';

// pages
import { AppComponent } from './app.component';
import { DoComponent } from './pages/do/do.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ContactComponent } from './pages/contact/contact.component';

// components
import { NavComponent } from './components/nav/nav.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    DoComponent,
    BuyComponent,
    ContactComponent,
    NavComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
