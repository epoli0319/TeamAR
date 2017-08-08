import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Informationpage} from '../Informationpage/Informationpage'

@Component({
  selector: 'page-Artist',
  templateUrl: 'Artist.html'
})
export class Artist {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showInformationPage() {
      this.navCtrl.push(Informationpage);
  }

}
