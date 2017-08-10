import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {visited} from '../visited/visited'
import {Camera, CameraOptions} from '@ionic-native/camera';
import {HTTP} from '@ionic-native/HTTP';
import { File } from '@ionic-native/file';

import {Askuser} from '../Askuser/Askuser';

@Component({
  selector: 'page-OpeningPage',
  templateUrl: 'OpeningPage.html'
})
export class OpeningPage {
items: any;
public photo: any;
public base64Image: string;
constructor(public navCtrl: NavController, private camera: Camera, private http: HTTP, private file: File) {
  this.images = [];
}

private copyFileToLocalDir(namePath, currentName, newFileName) {
	  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
	    this.lastImage = newFileName;
	  },(err) => {
    //Handle error
    });

  showvisited() {
      this.navCtrl.push(visited);
  }

  ngOnInit(){
    this.photo = []
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageaData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo.push(base64Image);
      this.photo.reverse();
      }, (err) => {
      //Handle error
      });
    this.camera.getPicture(options).then((imageaPath) => {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/')+1);
     	var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/')+1);
      this.copyFileToLocalDir(correctPath,currentName,this.createFileName());
      /** uploadFile(s3.us-east-2.amazonaws.com/viewyorkpic/, {}, {}, correctPath, "anything"); */
      }, (err) => {
      //Handle error
      });

    this.navCtrl.push(Askuser)
  }

}
