import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OpeningPage} from '../OpeningPage/OpeningPage';
import {Subject} from '../Subject/Subject';
import {Artist} from '../Artist/Artist';
import {Location} from '../Location/Location';
import {Why} from '../Why/Why';
import {FunFacts} from '../FunFacts/FunFacts';


@Component({
  selector: 'page-Informationpage',
  templateUrl: 'Informationpage.html'
})
export class Informationpage {

  constructor(public navCtrl: NavController) {

  }
  showOpeningPage() {
      this.navCtrl.push(OpeningPage);
  }
  showSubjectPage() {
      this.navCtrl.push(Subject);
  }
  showArtistPage() {
      this.navCtrl.push(Artist);
  }
  showLocationPage() {
      this.navCtrl.push(Location);
  }
  showWhyPage() {
      this.navCtrl.push(Why);
  }
  showFunFactsPage() {
      this.navCtrl.push(FunFacts);
  }
}
