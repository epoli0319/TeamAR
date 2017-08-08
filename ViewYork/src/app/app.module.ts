import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { OpeningPage } from '../pages/OpeningPage/OpeningPage';
import { visited } from '../pages/visited/visited';
import { Informationpage } from '../pages/Informationpage/Informationpage';
import { Location } from '../pages/Location/Location';



@NgModule({
  declarations: [
    MyApp,
    OpeningPage,
    visited,
    Informationpage
    Location

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OpeningPage,
    visited,
    Informationpage
    Location
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
