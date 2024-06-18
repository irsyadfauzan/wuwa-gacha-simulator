import { Injectable } from '@angular/core';
import { PullItem } from 'src/interface/pull-item-model';
import { DataPoolService } from './data-pool.service';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {

  constructor(private dataPoolService : DataPoolService) { }
  
  goldChance = 0.008
  purpleChance = 0.06
  avgGoldChance = 0.018
  avgPurpleChance = 0.12

  count = 0;

  pullArray:PullItem[] = []
  allArray:PullItem[] = []

  astriteSpent = 0

  convene(amount:number) {
    this.resetPullArray()
    if (amount === 1) {
      this.setItem()
    } else {
      for (let index = 0; index < amount; index++) {
        this.setItem()
      }
    }
    this.addAllArray()
    this.countAstrites()
    console.log("all array : ", this.allArray)
  }

  setItem() {
    this.increaseCount(1)
    console.log(this.count)
    if (this.count % 80 === 0) {
      console.log("here 1")
      // guarantee gold
      this.pullGold()
    } else if (this.count % 10 === 0) {
      console.log("here 2")
      // guaranteed purple or gold
      const randomizeDecimal = this.randomizerDecimals()
      if (randomizeDecimal < 982) {
        this.pullPurple()
      } else {
        this.pullGold
      }
    } else if (this.count > 70) {
      console.log("here 3")
      // soft pity
      const randomizeDecimal = this.randomizerDecimals()
      // average pull rate
       if (randomizeDecimal < 862) {
        // blue
        this.pullBlue()
       } else if (randomizeDecimal < 982) {
        // purple
        this.pullPurple()
       } else { 
        // gold
        this.pullGold()
       }
    } else {
      console.log("here 4")
      // base pull rate
      const randomizeDecimal = this.randomizerDecimals()
      console.log(randomizeDecimal)
      // average pull rate
       if (randomizeDecimal < 932) {
        // blue
        this.pullBlue()
       } else if (randomizeDecimal < 992) {
        // purple
        this.pullPurple()
       } else { 
        // gold
        this.pullGold()
       }
    }
  }

  pullGold() {
    if (this.randomizer() < 0.5) {
      this.pullArray.push(this.dataPoolService.specialItem)
    } else {
      this.pullArray.push(this.randomizeStandardGold())
    }
  }

  pullPurple() {
    if (this.randomizer() < 0.5) {
      this.pullArray.push(this.randomizeSpecialPurple())
    } else {
      this.pullArray.push(this.randomizeStandardPurple())
    }
  }

  pullBlue() {
    this.pullArray.push(this.randomizeStandardBlue())
  }

  randomizeStandardGold() : PullItem {
    const random = Math.floor(Math.random() * this.dataPoolService.goldItemPool.length);
    return this.dataPoolService.goldItemPool[random]
  }

  randomizeSpecialPurple() : PullItem {
    const random = Math.floor(Math.random() * this.dataPoolService.specialItemPurplePool.length)
    return this.dataPoolService.specialItemPurplePool[random]
  }

  randomizeStandardPurple() : PullItem {
    const random = Math.floor(Math.random() * this.dataPoolService.purpleItemPool.length)
    return this.dataPoolService.purpleItemPool[random]
  }

  randomizeStandardBlue() : PullItem {
    const random = Math.floor(Math.random() * this.dataPoolService.BlueItemPool.length)
    return this.dataPoolService.BlueItemPool[random]
  }

  increaseCount(amount:number) {
    this.count+=amount
  }

  resetPullArray() {
    this.pullArray = []
  }

  addAllArray() {
    console.log("pull array before concat :", this.pullArray)
    this.allArray = this.allArray.concat(this.pullArray)
  }

  randomizer() {
    return Math.random()
  }

  randomizerDecimals() {
    return Math.floor(Math.random() * (1000 - 100) + 100)
  }

  countAstrites() {
    this.astriteSpent = this.count*160
  }
} 
