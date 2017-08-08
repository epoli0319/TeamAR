import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-Askuser',
  templateUrl: 'Askuser.html'
})
export class Askuser {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showInformationPage() {
      this.navCtrl.push(Informationpage);
  }

}
