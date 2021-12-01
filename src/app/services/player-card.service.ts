import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { initPlayerCard, initPlayerCardList, IPlayerCard } from '../models/player.model';
import { PlayerApiService } from './player-api.service';



@Injectable({
  providedIn: 'root'
})
export class PlayerCardService {
 


  constructor() { }

  
  /*
  * describe : Adds to card to card list and return the updated list
  * param: {IPlayerCard[]} list
  * param: {IPlayerCard} itemToAdd
  * retrun: IPlayerCard[] 
  */
  addToPlayerCardToList(list : IPlayerCard[] , itemToAdd : IPlayerCard) : IPlayerCard[] {
    const newCardInfo : IPlayerCard = {
      ...itemToAdd,
      id : uuid(),
    };
     const newList : IPlayerCard[] = list.concat(newCardInfo);     
     return newList;
  }

  /*
  * describe : Updates to card to card list and return the updated list
  * param: {IPlayerCard[]} list
  * param: {IPlayerCard} itemToUpdate
  * retrun: IPlayerCard[] 
  */
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
    // console.log('updatePlayerCardToList', updatedList);
    
    return updatedList;
  }

  /*
  * describe : Delete card from card list and return the updated list
  * param: {IPlayerCard[]} list
  * param: {number} id
  * retrun: IPlayerCard[] 
  */
  deletePlayerCardFromList(list : IPlayerCard[] , id : string) : IPlayerCard[] {
    const newList : IPlayerCard[] = list.map(item => item);    
    const index = newList.findIndex((palyerCard : IPlayerCard) => palyerCard.id === id);
    if (index > -1) {
      newList.splice(index, 1);
    };    
    return newList;
  }

  /*
  * describe : get card list
  * retrun: IPlayerCard[]
  */
  getPlayerCardList() : IPlayerCard[] {
    const playerCardList = initPlayerCardList;
    return playerCardList;
  }


  /*
  * describe : get card from card list by id
  * param: {IPlayerCard[]} list
  * param: {number} id
  * retrun: IPlayerCard
  */
  getPlayerCardById(list : IPlayerCard[] , id : string | null) : IPlayerCard {
    const playerCard  = list.find((palyerCard : IPlayerCard) => palyerCard.id === id);
    // console.log('getPlayerCardById service', playerCard);
    
    return playerCard ? playerCard : initPlayerCard;
  }


  /*
  * describe : get total card value
  * param: {IPlayerCard[]} list
  * retrun: number
  */
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
