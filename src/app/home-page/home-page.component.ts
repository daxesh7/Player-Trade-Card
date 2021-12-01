//Core DI
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
// Store Action Selectors
import { Store } from '@ngrx/store';
import * as playerActions from '../store/actions/player.action';
import * as selectors from '../store/selectors/player.selector';
import { AppState } from '../store/state/app.state';
// Services and Models
import { UtilService } from '../services/util.service';
import { IPlayerCard } from '../models/player.model';
import { PlayerCardService } from '../services/player-card.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit  {

  playerId : string | null = '0';
  playerCards : IPlayerCard[] = [];  
  totalCardValue : number = 0;
  isLoading : boolean = true;




  constructor(
    private store : Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,  
    private utilService : UtilService,
    private playerCardService : PlayerCardService,
    ) {

  }

  ngOnInit(): void {
    // get all cards action
    this.store.dispatch(playerActions.getPlayerCards());

    // this.playerCardApiService.getAllPlayerCards();
    // based on parma do get by Id Call
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   const id : string | null = paramMap.get('id');      
    //   if(!this.utilService.isNullOrEmpty(id) && id !== '0') {
    //     this.playerId = id;        
    //     this.store.dispatch(actions.getPlayerCardById({payload: this.playerId}));
    //   }else {
    //     this.router.navigate(['/']);
    //   }
    // });

    //selectors
    this.store.select(selectors.selectorGetPlayerCards)
    .subscribe((data : IPlayerCard[]) => {
      // console.log('selectorGetPlayerCards', data);
      this.playerCards = data;
      this.totalCardValue = this.playerCardService.getEstimatedCardTotal(data);
    });

  };

  /*
  * describe : This handler is dispatch the action based 
  * on the id to Add or Update the Card
  * param: {IPlayerCard} itemToSubmit
  * retrun: void 
  */
  submitCardHandler(itemToSubmit : IPlayerCard ) {
    // console.log('submitCardHandler', itemToSubmit);
    if(!itemToSubmit.id || itemToSubmit.id === '0'){
      this.store.dispatch(playerActions.addPlayerCard({payload : itemToSubmit}));
    }else {
      this.store.dispatch(playerActions.updatePlayerCard({payload : itemToSubmit}));
    }
  }

  /*
  * describe : This handler is dispatch the action based 
  * on the id to Remove the Card
  * param: {IPlayerCard} itemToRemove
  * retrun: void 
  */
  removeCardHandler(itemToRemove : IPlayerCard ) {    
    this.store.dispatch(playerActions.deletePlayerCard({payload : itemToRemove.id}));
  }

  /*
  * describe : This handler is dispatch the action based 
  * on the id to select the Card to fill out form
  * param: {IPlayerCard} itemSelected
  * retrun: void 
  */
  selectCardHandler(itemSelected : IPlayerCard ) {    
    this.store.dispatch(playerActions.getPlayerCardById({payload : itemSelected.id}));
    // this.router.navigate(['/home', itemSelected.id])
  }

}
