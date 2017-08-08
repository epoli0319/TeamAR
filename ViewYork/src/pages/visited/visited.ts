import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpeningPage } from '../OpeningPage/OpeningPage'

@Component({
  selector: 'page-visited',
  templateUrl: 'visited.html'
})
export class visited {
  items: any;
  constructor(public navCtrl: NavController) {

  }
  showOpeningPage() {
      this.navCtrl.push(OpeningPage);
  }
}
