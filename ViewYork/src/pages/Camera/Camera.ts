import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OpeningPage} from '../OpeningPage/OpeningPage'

@Component({
  selector: 'page-Camera',
  templateUrl: 'Camera.html'
})
export class Camera {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showOpeningPage() {
      this.navCtrl.push(OpeningPage);
  }

}
