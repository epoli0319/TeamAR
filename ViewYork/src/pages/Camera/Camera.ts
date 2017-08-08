import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {visited} from '../visited/visited'

@Component({
  selector: 'page-Camera',
  templateUrl: 'Camera.html'
})
export class Camera {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showVisitedPage() {
      this.navCtrl.push(visited);
  }

}
