import * as PlayerCardActions  from '../actions/player.action';
import { initPlayerCardState, IPlayerCardState } from '../state/player.state';
import { PlayerCardService } from '../../services/player-card.service';
import { ActionsSubject, createReducer , on} from '@ngrx/store';
import { initPlayerCard } from 'src/app/models/player.model';


export const playerCardReducer = createReducer(
    initPlayerCardState ,
    on(PlayerCardActions.addPlayerCard , (state : IPlayerCardState, {payload}) => {
        const playerCardService = new PlayerCardService();
        const addedList = playerCardService.addToPlayerCardToList(
            state.playerCards,
            payload
        );
        return {
            ...state,
            playerCards: addedList,
            selectedPlayerCard : initPlayerCard
        };
    }), 
    on(PlayerCardActions.updatePlayerCard , (state : IPlayerCardState, {payload}) => {
        const playerCardService = new PlayerCardService();
        const updatedList = playerCardService.updatePlayerCardToList(
            state.playerCards,
            payload
        );
        return {
            ...state,
            playerCards: updatedList,
        };
    }),   
    on(PlayerCardActions.deletePlayerCard , (state : IPlayerCardState, {payload}) => {
        const playerCardService = new PlayerCardService();
        const deletedList = playerCardService.deletePlayerCardFromList(
            state.playerCards,
            payload
        );
        return {
            ...state,
            playerCards: deletedList,
        }
    }),
    on(PlayerCardActions.getPlayerCards , (state : IPlayerCardState) => {
        const playerCardService = new PlayerCardService();
        const getAllCards = playerCardService.getPlayerCardList();        
        return {
            ...state,
            playerCards: getAllCards,
        };
    }),
    on(PlayerCardActions.getPlayerCardById , (state : IPlayerCardState, {payload}) => {
        const playerCardService = new PlayerCardService();
        const getAllCardbyId = playerCardService.getPlayerCardById(state.playerCards , payload);
        return {
            ...state,
            selectedPlayerCard: getAllCardbyId,
        };
    }),

    //#region  API ACTION REDUCERS
    on(PlayerCardActions.getPlayerCardsApi , (state : IPlayerCardState , {payload}) => {
        // console.log('reducers getPlayerCardsApi', payload);
        return {
            ...state,
            playerCards: payload,
            isLoading : false
        };
    }),

    //#endregion
);