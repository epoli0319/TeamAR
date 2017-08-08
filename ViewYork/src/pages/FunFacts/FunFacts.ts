import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Informationpage} from '../Informationpage/Informationpage'

@Component({
  selector: 'page-FunFacts',
  templateUrl: 'FunFacts.html'
})
export class FunFacts {
  items: any;
  constructor(public navCtrl: NavController) {

  }
  showInformationpage() {
      this.navCtrl.push(Informationpage);
  }
}
