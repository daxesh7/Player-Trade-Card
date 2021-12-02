//#region  Core DI
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
//#endregion
//#region  Service and Models
import { IPlayerCard } from '../models/player.model';
import { UtilService } from '../services/util.service';
import { PlayerCardService } from '../services/player-card.service';
//#endregion


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  @Input() public playerCards : IPlayerCard[] = [];
  @Input() public displayPlayerCards : IPlayerCard[] = [];
  @Input() public totalCardValue : number = 0;
  @Input() public isLoading : boolean = true;
  @Output() public removeCardEvent : EventEmitter<IPlayerCard> = new EventEmitter();
  @Output() public selectCardEvent : EventEmitter<IPlayerCard> = new EventEmitter();

  searchQuery : string = '';
  isSearchActive : boolean = false;
  

  constructor(private utilService : UtilService , private playerCardService : PlayerCardService) { }

  ngOnInit(): void {
    this.displayPlayerCards = this.playerCards;
    this.isSearchActive = false;
  }

  /*
  * describe : This function that calculates total of all card values
  * param: none
  * retrun: number 
  */
  getEstimatedCardTotal(): number {
    let total = this.playerCardService.getEstimatedCardTotal(this.playerCards);
    return total;
  };

  /*
  * describe : This function that handles search event on the list
  * and which is triggered on click of search button and 
  * set search item to display list
  * param: none
  * retrun: void 
  */
  searchPlayerCards(){
    if(!this.utilService.isNullOrEmpty(this.searchQuery)){
      const filterData : IPlayerCard[] = [];
      this.playerCards?.map((playerCard : IPlayerCard) => {
        if
        (
          this.utilService.compareWithNoCaseSensitive(this.searchQuery,playerCard.firstName) ||
          this.utilService.compareWithNoCaseSensitive(this.searchQuery,playerCard.lastName) ||
          this.utilService.compareWithNoCaseSensitive(this.searchQuery,playerCard.teamName) 
        ){
          filterData.push(playerCard);
        }
        return playerCard;
      });
      this.displayPlayerCards = filterData;
      this.isSearchActive = true;
      
    };    
  }

  /*
  * describe : This function that handles search event on the list
  * and which is triggered on kekup and when it is empty it
  * reset the dispaly item to actual item from state
  * param: none
  * retrun: void 
  */
  searchValueChange(){
    if(this.utilService.isNullOrEmpty(this.searchQuery)){
      this.displayPlayerCards = this.playerCards;
      this.isSearchActive = false;    
    };    
  }

  /*
  * describe : This function that handles remove event from the list
  * and emit value which is handle to dispatch remove action
  * param: {IPlayerCard} playerCard
  * retrun: void 
  */
  removeCard(playerCard : IPlayerCard) {
    this.removeCardEvent.emit(playerCard);
  }

  /*
  * describe : This function that handles select event from the list
  * and emit value which is handle to dispatch select actions
  * param: {IPlayerCard} playerCard
  * retrun: void 
  */
  selectCard(playerCard : IPlayerCard) {
    this.selectCardEvent.emit(playerCard);
  }
  

}
