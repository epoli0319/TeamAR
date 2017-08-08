import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Informationpage} from '../Informationpage/Informationpage'

@Component({
  selector: 'page-Why',
  templateUrl: 'Why.html'
})
export class Why {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showInformationpage() {
      this.navCtrl.push(Informationpage);
  }
}
