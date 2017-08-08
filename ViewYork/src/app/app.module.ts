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
import { Funfacts } from '../pages/Funfacts/Funfacts';
import { Artist } from '../pages/Artist/Artist';
import { Subject } from '../pages/Subject/Subject';
import { Why } from '../pages/Why/Why';
import { Camera } from '../pages/Camera/Camera';


@NgModule({
  declarations: [
    MyApp,
    OpeningPage,
    visited,
    Informationpage,
    Location,
    Funfacts,
    Artist,
    Subject,
    Why,
    Camera,

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
    Informationpage,
    Location,
    Funfacts,
    Artist,
    Subject,
    Why,
    Camera,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
