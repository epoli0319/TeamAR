import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpeningPage } from '../OpeningPage/OpeningPage'

@Component({
  selector: 'page-FunFacts',
  templateUrl: 'FunFacts.html'
})
export class FunFacts {
  items: any;
  constructor(public navCtrl: NavController) {

  }
  showOpeningPage() {
      this.navCtrl.push(OpeningPage);
  }
}
