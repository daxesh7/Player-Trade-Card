import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { IPlayerCard } from '../models/player.model';
import { UtilService } from '../services/util.service';
import { PlayerCardService } from '../services/player-card.service';



@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  @Input() public playerCards : IPlayerCard[] = [];
  @Input() public displayPlayerCards : IPlayerCard[] = [];
  @Input() public totalCardValue : number = 0;
  @Output() public removeCardEvent : EventEmitter<IPlayerCard> = new EventEmitter();
  @Output() public selectCardEvent : EventEmitter<IPlayerCard> = new EventEmitter();

  searchQuery : string = '';
  isSearchActive : boolean = false;
  

  constructor(private utilService : UtilService , private playerCardService : PlayerCardService) { }

  ngOnInit(): void {
    // this.store.select(selectors.selectorGetPlayerCards)
    // .subscribe((data : IPlayerCard[]) => {
    //   // console.log('data', data);
      
    //   this.playerCards = data;
    //   this.displayPlayerCards = data;
    //   this.totalCardValue = this.getEstimatedCardTotal();
    //   this.isSearchActive = false;
    // });

    this.displayPlayerCards = this.playerCards;
    this.isSearchActive = false;
    
  }

  getEstimatedCardTotal(): number {
    let total = this.playerCardService.getEstimatedCardTotal(this.playerCards);
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

  removeCard(playerCard : IPlayerCard) {
    this.removeCardEvent.emit(playerCard);
  }

  selectCard(playerCard : IPlayerCard) {
    this.selectCardEvent.emit(playerCard);
  }
  

}
