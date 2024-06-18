import { Component } from '@angular/core';
import { MainLogicService } from './services/main-logic.service';
import { PullItem } from 'src/interface/pull-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pullArray : PullItem[] = []
  allArray : PullItem[] = []
  showModal : Boolean = false
  showModalAllPulls: Boolean = false
  count : number = 0
  astriteCount : number = 0

  constructor(private mainLogicService : MainLogicService) {}
  
  convene(amount : number) {
    this.mainLogicService.convene(amount)
    this.pullArray = this.mainLogicService.pullArray
    this.count = this.mainLogicService.count
    this.allArray = this.mainLogicService.allArray
    this.astriteCount = this.mainLogicService.astriteSpent
    this.openModal()
  }

  closeModal() {
    this.showModal = false
  }

  openModal() {
    this.showModal = true
  }

  closeModalAllPulls() {
    this.showModalAllPulls = false
  }

  openModalAllPulls() {
    this.showModalAllPulls = true
  }
}
