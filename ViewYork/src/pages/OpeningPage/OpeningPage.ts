import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {visited} from '../visited/visited'
import {Camera, CameraOptions} from '@ionic-native/camera';
import {HTTP} from '@ionic-native/http';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';


import {Askuser} from '../Askuser/Askuser';

declare var cordova: any;

@Component({
  selector: 'page-OpeningPage',
  templateUrl: 'OpeningPage.html'
})
export class OpeningPage {
items: any;
images: Array<{src: String}>;
lastImage: string = null;
public photo: any;
public base64Image: string;
constructor(public navCtrl: NavController, private camera: Camera, private http: HTTP,
  private file: File, public toastCtrl: ToastController, private transfer: FileTransfer, private alertCtrl: AlertController) {
  this.images = [];
}

  showvisited() {
      this.navCtrl.push(visited);
  }

  ngOnInit(){
    this.photo = []
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
  	  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
  	    this.lastImage = newFileName;
  	  }, error => {
  	    this.presentToast('Error while storing file.');
  	  });
  	}

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: 1, // FILE_URI : 1, Return image file URI
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imagePath) => {
		     // imageData is either a base64 encoded string or a file URI
		     // If it's base64:
        // let base64Image = 'data:image/jpeg;base64,' + imageData;

        let alert = this.alertCtrl.create({
          title: 'Picture taken:',
          subTitle: imagePath,
          buttons: ['Dismiss']
        });
        alert.present();

        this.http.uploadFile('34.232.228.168', {}, {}, imagePath, "statue")
        .then(data => {

          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

          let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: data.data,
            buttons: ['Dismiss']
          });
          alert.present();

        })
        .catch(error => {

          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

          let alert = this.alertCtrl.create({
            title: error.headers[1],
            subTitle: error.error,
            buttons: ['Ok']
          });
          alert.present();
        });

      }, (err) => {
        // Handle error
      });


    this.navCtrl.push(Askuser)
  }

  // Create a new name for the image
  	private createFileName() {
  	  var d = new Date(),
  	  n = d.getTime(),
  	  newFileName =  n + ".jpg";
  	  return newFileName;
  	}


  	private presentToast(text) {
  	  let toast = this.toastCtrl.create({
  	    message: text,
  	    duration: 3000,
  	    position: 'top'
  	  });
  	  toast.present();
  	}

  	// Always get the accurate path to your apps folder
  	public pathForImage(img) {
  	  if (img === null) {
  	    return '';
  	  } else {
  	    return cordova.file.dataDirectory + img;
  	  }
  	}
  }
