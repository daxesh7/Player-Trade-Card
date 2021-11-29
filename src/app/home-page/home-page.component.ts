//Core DI
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Store Action Selectors
import { Store } from '@ngrx/store';
import * as actions from '../store/actions/player.action';
import * as selectors from '../store/selectors/player.selector';
import { AppState } from '../store/state/app.state';
// Services and Models
import { UtilService } from '../services/util.service';
import { initPlayerCard, IPlayerCard } from '../models/player.model';
import { PlayerCardService } from '../services/player-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  playerId : number = -1;
  playerCards : IPlayerCard[] = [];  
  totalCardValue : number = 0;


  constructor(
    private store : Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,  
    private utilService : UtilService,
    private playerCardService : PlayerCardService) {

  }

  ngOnInit(): void {
    // get all cards action
    this.store.dispatch(actions.getPlayerCards());
    // based on parma do get by Id Call
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');      
      if(!this.utilService.isNaN(Number(id))) {
        this.playerId = Number(id);        
        this.store.dispatch(actions.getPlayerCardById({payload: this.playerId}));
      }else {
        this.router.navigate(['/']);
      }
    });

    //selectors
    this.store.select(selectors.selectorGetPlayerCards)
    .subscribe((data : IPlayerCard[]) => {
      console.log('selectorGetPlayerCards', data);
      this.playerCards = data;
      this.totalCardValue = this.playerCardService.getEstimatedCardTotal(data);
    });

  }

  

  addCardHandler(itemToAdd : IPlayerCard ) {
    // console.log('addCardHandler', itemToAdd);
    this.store.dispatch(actions.addPlayerCard({payload : itemToAdd}));
  }

  updateHandler(itemToUpdate : IPlayerCard ) {
    // console.log('addCardHandler', itemToAdd);
    this.store.dispatch(actions.updatePlayerCard({payload : itemToUpdate}));
  }

  removeCardHandler(itemToRemove : IPlayerCard ) {
    // console.log('addCardHandler', itemToAdd);
    this.store.dispatch(actions.deletePlayerCard({payload : itemToRemove.playerNumber}));
  }

  selectCardHandler(itemSelected : IPlayerCard ) {
    // console.log('selectCardHandler', itemSelected);
    // this.store.dispatch(actions.getPlayerCardById({payload : itemSelected.playerNumber}));
    this.router.navigate(['/home', itemSelected.playerNumber])
  }

}
