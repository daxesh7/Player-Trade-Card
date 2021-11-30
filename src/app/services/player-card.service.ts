import { Injectable } from '@angular/core';
import { initPlayerCard, initPlayerCardList, IPlayerCard } from '../models/player.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PlayerCardService {
 
  constructor() { }

  

  addToPlayerCardToList(list : IPlayerCard[] , itemToAdd : IPlayerCard) : IPlayerCard[] {
    const newCardInfo : IPlayerCard = {
      ...itemToAdd,
      id : uuid(),
    };
     const newList : IPlayerCard[] = list.concat(newCardInfo);     
     return newList;
  }

  updatePlayerCardToList(list : IPlayerCard[] , itemToUpdate : IPlayerCard) : IPlayerCard[] {
    const updatedList : IPlayerCard [] = [];
    list.map((palyerCard : IPlayerCard) => {
      if(palyerCard.id === itemToUpdate.id){
        const updatedPalyerCard = {
          ...itemToUpdate
        };
        updatedList.push(updatedPalyerCard);
      }else {
        updatedList.push(palyerCard);
      }
    });
    console.log('updatePlayerCardToList', updatedList);
    
    return updatedList;
  }

  deletePlayerCardFromList(list : IPlayerCard[] , id : string) : IPlayerCard[] {
    const newList : IPlayerCard[] = list.map(item => item);    
    const index = newList.findIndex((palyerCard : IPlayerCard) => palyerCard.id === id);
    if (index > -1) {
      newList.splice(index, 1);
    };    
    return newList;
  }

  getPlayerCardList() : IPlayerCard[] {
    const playerCardList = initPlayerCardList;
    return playerCardList;
  }

  getPlayerCardById(list : IPlayerCard[] , id : string | null) : IPlayerCard {
    const playerCard  = list.find((palyerCard : IPlayerCard) => palyerCard.id === id);
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
