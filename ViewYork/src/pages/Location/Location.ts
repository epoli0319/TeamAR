import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Informationpage} from '../Informationpage/Informationpage'

@Component({
  selector: 'page-Location',
  templateUrl: 'Location.html'
})
export class Location {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showInformationPage() {
      this.navCtrl.push(Informationpage);
  }

}
