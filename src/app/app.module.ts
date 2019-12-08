import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

// services
import { ApiService } from '@services/api.service';

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
    HttpClientModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
