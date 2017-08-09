import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpeningPage } from '../OpeningPage/OpeningPage'

@Component({
  selector: 'page-visited',
  templateUrl: 'visited.html'
})
export class visited {
  items: any;

  items: string[]

  constructor(public navCtrl: NavController) {
     this.initializeItems();
  }
  showOpeningPage() {
      this.navCtrl.push(OpeningPage);
  }
  AddItems() {
  //function to add visited pages to empty string called items. Items starts empty
  }
}
