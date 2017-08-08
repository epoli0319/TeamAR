import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Artist} from '../Artist/Artist'

@Component({
  selector: 'page-Artist',
  templateUrl: 'Artist.html'
})
export class Artist {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showVisitedPage() {
      this.navCtrl.push(visited);
  }

}
