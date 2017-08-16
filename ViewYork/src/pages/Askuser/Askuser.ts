import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Informationpage} from '../Informationpage/Informationpage'
import {OpeningPage} from '../OpeningPage/OpeningPage'

import {Camera, CameraOptions} from '@ionic-native/camera';
import {HTTP} from '@ionic-native/http';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { ToastController } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-Askuser',
  templateUrl: 'Askuser.html'
})
export class Askuser {
items: any;
images: Array<{src: String}>;
lastImage: string = null;
public photo: any;
public base64Image: string;

constructor(public navCtrl: NavController, private camera: Camera, private http: HTTP,
  private file: File, public toastCtrl: ToastController, private transfer: FileTransfer, private alertCtrl: AlertController) {
  this.images = [];
}

  //showstatuename(){
    //this.http.get('url to get info??', {}, {}, imagePath, "file")
    //.then(data => {

  //    console.log(data.status);
  //    console.log(data.data); // data received by server
  //    console.log(data.headers);

      ///let alert = this.alertCtrl.create({
      ///  title: 'Success',
      ///  subTitle: data.data,
      ///  buttons: ['Dismiss']
    ///  });
    ///  alert.present();

  //  })
  //  .catch(error => {

  //    console.log(error.status);
  //    console.log(error.error); // error message as string
  //    console.log(error.headers);

    //  let alert = this.alertCtrl.create({
    //    title: error.headers[1],
    //    subTitle: error.error,
  //      buttons: ['Ok']
  //    });
  //    alert.present();
//    });

  //}, (err) => {
    // Handle error
//  });
  //}

  showInformationPage() {
      this.navCtrl.push(Informationpage);
      }
  showOpeningPage(){
    this.navCtrl.push(OpeningPage);
  }
  }
