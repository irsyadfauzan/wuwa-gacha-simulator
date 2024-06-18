import { Injectable } from '@angular/core';
import { PullItem } from 'src/interface/pull-item-model';

@Injectable({
  providedIn: 'root'
})
export class DataPoolService {

  constructor() { }

  goldItemPool:PullItem[] = [
    {
      name : 'Encore',
      type : 'gold'
    },
    {
      name : 'Jianxin',
      type : 'gold'
    },
    {
      name : 'Lingyang',
      type : 'gold'
    },
    {
      name : 'Calcharo',
      type : 'gold'
    },
    {
      name : 'Verina',
      type : 'gold'
    }
  ]
  
  specialItem:PullItem = {
    name : 'Yinlin',
    type : 'gold'
  }

  specialItemPurplePool:PullItem[] = [
    {
      name : 'Taoqi',
      type : 'purple'
    },    {
      name : 'Aalto',
      type : 'purple'
    },    {
      name : 'Yuanwu',
      type : 'purple'
    },
  ]

  purpleItemPool:PullItem[] = [
    {
      name : 'Yangyang',
      type : 'purple'
    },
    {
      name : 'Sanhua',
      type : 'purple'
    },
    {
      name : 'Mortefi',
      type : 'purple'
    },
    {
      name : 'Baizhi',
      type : 'purple'
    },
    {
      name : 'Chixia',
      type : 'purple'
    },
    {
      name : 'Danjin',
      type : 'purple'
    },
    {
      name : 'Dauntless Evernight',
      type : 'purple'
    },    {
      name : 'Commando of Conviction',
      type : 'purple'
    },    {
      name : 'Undying Flame',
      type : 'purple'
    },    {
      name : 'Amity Accord',
      type : 'purple'
    },    {
      name : 'Jinzhou Keeper',
      type : 'purple'
    },    {
      name : 'Discord',
      type : 'purple'
    },    {
      name : 'Overture',
      type : 'purple'
    },    {
      name : 'Cadenza',
      type : 'purple'
    },    {
      name : 'Marcato',
      type : 'purple'
    },    {
      name : 'Variation',
      type : 'purple'
    },    {
      name : 'Helios Cleaver',
      type : 'purple'
    },    {
      name : 'Lunar Cutter',
      type : 'purple'
    },    {
      name : 'Novaburst',
      type : 'purple'
    },    {
      name : 'Hollow Mirage',
      type : 'purple'
    },    {
      name : 'Comet',
      type : 'purple'
    },
  ]

  BlueItemPool:PullItem[] = [
    {
      name : 'Broadblade of Night',
      type : 'blue'
    },
    {
      name : 'Sword of Night',
      type : 'blue'
    },    {
      name : 'Pistols of Night',
      type : 'blue'
    },    {
      name : 'Gauntlets of Night',
      type : 'blue'
    },    {
      name : 'Rectifier of Night',
      type : 'blue'
    },    {
      name : 'Broadblade of Voyager',
      type : 'blue'
    },    {
      name : 'Sword of Voyager',
      type : 'blue'
    },    {
      name : 'Pistols of Voyager',
      type : 'blue'
    },    {
      name : 'Gauntlets of Voyager',
      type : 'blue'
    },    {
      name : 'Rectifier of Voyager',
      type : 'blue'
    },    {
      name : 'Originite: Type I',
      type : 'blue'
    },    {
      name : 'Originite: Type II',
      type : 'blue'
    },    {
      name : 'Originite: Type III',
      type : 'blue'
    },    {
      name : 'Originite: Type IV',
      type : 'blue'
    },    {
      name : 'Originite: Type V',
      type : 'blue'
    },
  ]
}
