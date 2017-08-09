import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpeningPage } from '../OpeningPage/OpeningPage'

@Component({
  selector: 'page-visited',
  templateUrl: 'visited.html'
})
export class visited {
  items: any;
  statues: string[];

  constructor(public navCtrl: NavController) {
  }
  showOpeningPage() {
      this.navCtrl.push(OpeningPage);
  }
  AddStatues() {
  //function to add visited pages to empty string called statues. Items starts empty
  }
}
