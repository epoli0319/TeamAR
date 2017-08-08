import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '../Camera/Camera'

@Component({
  selector: 'page-OpeningPage',
  templateUrl: 'OpeningPage.html'
})
export class OpeningPage {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showVisitedPage() {
      this.navCtrl.push(visited);
  }
  showCameraPage() {
      this.navCtrl.push(Camera);
  }

}
