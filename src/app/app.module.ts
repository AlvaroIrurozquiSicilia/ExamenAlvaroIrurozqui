import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SaludoComponent } from './saludo/saludo.component';
import { LapsoComponent } from './lapso/lapso.component';

@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    SaludoComponent,
    LapsoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
