import { Component, OnInit } from '@angular/core';
import { IPlayerCard } from '../models/player.model';
import { UtilService } from '../services/util.service';
import { Store ,select } from '@ngrx/store';
import * as selectors from '../store/selectors/player.selector';
import * as actions from '../store/actions/player.action';
import { AppState } from '../store/state/app.state';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  playerCards : IPlayerCard[] = [];
  displayPlayerCards : IPlayerCard[] = [];
  totalCardValue : number = 0;
  searchQuery : string = '';
  isSearchActive : boolean = false;
  

  constructor(private utilService : UtilService , private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectors.selectorGetPlayerCards)
    .subscribe((data : IPlayerCard[]) => {
      // console.log('data', data);
      
      this.playerCards = data;
      this.displayPlayerCards = data;
      this.totalCardValue = this.getEstimatedCardTotal();
      this.isSearchActive = false;
    });
    
    
  }

  getEstimatedCardTotal(): number {
    let total = 0;
    this.playerCards?.forEach(card => {
      if(card.cardValue){
        total += card.cardValue;
      }
    });
    return total;
  };

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

  searchValueChange(){
    if(this.utilService.isNullOrEmpty(this.searchQuery)){
      this.displayPlayerCards = this.playerCards;
      this.isSearchActive = false;    
    };    
  }
  

}
