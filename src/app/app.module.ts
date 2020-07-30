import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResoucesComponent } from './component/resouces/resouces.component';
import { NextStepsComponent } from './component/next-steps/next-steps.component';
import { ZipPageComponent } from './pages/zip-page/zip-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { HiroListPageComponent } from './pages/hiro-list-page/hiro-list-page.component';
import { NonePageComponent } from './pages/none-page/none-page.component';
import { HogeComponent } from './component/hoge/hoge.component';

@NgModule({
  declarations: [
    AppComponent,
    ResoucesComponent,
    NextStepsComponent,
    ZipPageComponent,
    CounterPageComponent,
    HiroListPageComponent,
    NonePageComponent,
    HogeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
