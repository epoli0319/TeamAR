import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import {OpeningPage} from '../OpeningPage/OpeningPage'
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-Camerapage',
  templateUrl: 'CameraPage.html'
})
export class CameraPage {
  items: any;
  public photo: any;
  public base64Image: string;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  showOpeningPage() {
      this.navCtrl.push(OpeningPage);
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

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo.push(base64Image);
      this.photo.reverse();
      }, (err) => {
      //Handle error
      });
  }

}
