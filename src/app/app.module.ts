import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { myservice } from './my.service';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatListModule
  ],
  providers: [myservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
