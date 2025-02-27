import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './coursepage/header/header.component';
import { LogoComponent } from './coursepage/logo/logo.component';
import { FooterComponent } from './coursepage/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './coursepage/login/login.module';
import { APP_BASE_HREF } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutesModule } from './app-routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    PanelModule,
    FormsModule,
    LoginModule,
    AppRoutesModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
