import { Injectable } from '@angular/core';
import { initPlayerCard, initPlayerCardList, IPlayerCard } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerCardService {
 
  constructor() { }

  addToPlayerCardToList(list : IPlayerCard[] , itemToAdd : IPlayerCard) : IPlayerCard[] {
     const newList : IPlayerCard[] = list.concat(itemToAdd);     
     return newList;
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
    const newList : IPlayerCard[] = list.map(item => item);    
    const index = newList.findIndex((palyerCard : IPlayerCard) => palyerCard.playerNumber === playerNumber);
    if (index > -1) {
      newList.splice(index, 1);
    };    
    return newList;
  }

  getPlayerCardList() : IPlayerCard[] {
    const playerCardList = initPlayerCardList;
    return playerCardList;
  }

  getPlayerCardById(list : IPlayerCard[] , playerNumber : number) : IPlayerCard {
    const playerCard  = list.find((palyerCard : IPlayerCard) => palyerCard.playerNumber === playerNumber);
    // console.log('getPlayerCardById service', playerCard);
    
    return playerCard ? playerCard : initPlayerCard;
  }

  getEstimatedCardTotal(list : IPlayerCard[]): number {
    let total = 0;
    list.forEach(card => {
      if(card.cardValue){
        total += card.cardValue;
      }
    });
    return total;
  };

}
