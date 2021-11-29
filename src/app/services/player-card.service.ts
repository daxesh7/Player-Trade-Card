import { Injectable } from '@angular/core';
import { initPlayerCard, initPlayerCardList, IPlayerCard } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerCardService {
 
  constructor() { }

  addToPlayerCardToList(list : IPlayerCard[] , itemToAdd : IPlayerCard) : IPlayerCard[] {
     list.push(itemToAdd);
     return list;
  }

  updatePlayerCardToList(list : IPlayerCard[] , itemToUpdate : IPlayerCard) : IPlayerCard[] {
    list.map((palyerCard : IPlayerCard) => {
      if(palyerCard.playerNumber === itemToUpdate.playerNumber){
        palyerCard = itemToUpdate;
      }
    })
    return list;
  }

  deletePlayerCardFromList(list : IPlayerCard[] , playerNumber : number) : IPlayerCard[] {
    const index = list.findIndex((palyerCard : IPlayerCard) => palyerCard.playerNumber === playerNumber);
    const newList = list.splice(index ,1);
    return newList;
  }

  getPlayerCardList() : IPlayerCard[] {
    const playerCardList = initPlayerCardList;
    return playerCardList;
  }

  getPlayerCardById(list : IPlayerCard[] , playerNumber : number) : IPlayerCard {
    const playerCard  = list.find((palyerCard : IPlayerCard) => palyerCard.playerNumber === playerNumber);
    return playerCard ? playerCard : initPlayerCard;
  }

}
