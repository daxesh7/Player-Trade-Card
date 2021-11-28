import { Component, OnInit } from '@angular/core';
import { IPlayerCard } from '../models/player.model';
import { UtilService } from '../services/util.service';

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

  constructor(private utilService : UtilService) { }

  ngOnInit(): void {
    this.playerCards = [
      {firstName:' Ike' , lastName:'Anigbogu' , playerNumber: 14 , teamName: 'Indiana Pacers'},
      {firstName:' Ron' , lastName:'Baker' , playerNumber: 47 , teamName: 'Knicks'},
      {firstName:' Jabari' , lastName:'Bird' , playerNumber: 25 , teamName: 'Boston Celtics' , cardValue: 2}
    ];
    this.displayPlayerCards = this.playerCards;
    this.totalCardValue = this.getEstimatedCardTotal();
  }

  getEstimatedCardTotal(): number {
    let total = 0;
    this.playerCards.forEach(card => {
      if(card.cardValue){
        total += card.cardValue;
      }
    });
    return total;
  };

  searchPlayerCards(){
    if(!this.utilService.isNullOrEmpty(this.searchQuery)){
      const filterData : IPlayerCard[] = [];
      this.playerCards.map((playerCard : IPlayerCard) => {
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
