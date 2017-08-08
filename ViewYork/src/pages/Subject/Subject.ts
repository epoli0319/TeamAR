import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Informationpage} from '../Informationpage/Informationpage'

@Component({
  selector: 'page-Subject',
  templateUrl: 'Subject.html'
})
export class Subject {

  constructor(public navCtrl: NavController) {

  }
  showInformationpage() {
      this.navCtrl.push(Informationpage);
  }
}
