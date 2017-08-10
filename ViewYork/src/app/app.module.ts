import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/HTTP';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUpload, FileTransferObject } from '@ionic-native/file-transfer';


import { MyApp } from './app.component';
import { OpeningPage } from '../pages/OpeningPage/OpeningPage';
import { visited } from '../pages/visited/visited';
import { Informationpage } from '../pages/Informationpage/Informationpage';
import { Location } from '../pages/Location/Location';
import { FunFacts } from '../pages/FunFacts/FunFacts';
import { Artist } from '../pages/Artist/Artist';
import { Subject } from '../pages/Subject/Subject';
import { Why } from '../pages/Why/Why';
import { Askuser } from '../pages/Askuser/Askuser';
import { Photos } from '../pages/Photos/Photos';


@NgModule({
  declarations: [
    MyApp,
    OpeningPage,
    visited,
    Informationpage,
    Location,
    FunFacts,
    Artist,
    Subject,
    Why,
    Askuser,
    Photos,

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
    FunFacts,
    Artist,
    Subject,
    Why,
    Askuser,
    Photos,

  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, HTTP, File, FileTransfer, FileUpload, FileTransferObject,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
