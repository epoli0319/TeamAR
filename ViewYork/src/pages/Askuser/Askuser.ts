import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Informationpage} from '../Informationpage/Informationpage'
import {Camera, CameraOptions} from '@ionic-native/camera';


@Component({
  selector: 'page-Askuser',
  templateUrl: 'Askuser.html'
})
export class Askuser {
items: any;
public photo: any;
public base64Image: string;
constructor(public navCtrl: NavController, private camera: Camera) {

  }

  showInformationPage() {
      this.navCtrl.push(Informationpage);
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
