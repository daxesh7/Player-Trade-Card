import {playerCardReducer} from './player.reducer';
import * as playerCardActions from '../actions/player.action';
import { initPlayerCardState, IPlayerCardState  } from "../state/player.state";
import { IPlayerCard, testCardList } from 'src/app/models/player.model';
 
describe('PlayerCardReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {

      const action = {
        type: 'Unknown',
      };
      const state = playerCardReducer(initPlayerCardState, action);
      expect(state).toBe(initPlayerCardState);
    });
  });
 
  describe('GetPlayerCards', () => {
    it('should retrieve all cards and update the state in an immutable way', () => {
      const action = playerCardActions.getPlayerCards();
      const state = playerCardReducer(initPlayerCardState, action);
      expect(state).toEqual(initPlayerCardState);
    });
  });


  describe('AddPlayerCard', () => {
    it('should add card to the list', () => {
      const data = testCardList[0];
      const action = playerCardActions.addPlayerCard({payload: data});
      const state = playerCardReducer(initPlayerCardState, action);
      const newPalyerState : IPlayerCardState = {
        ...initPlayerCardState,
        playerCards : [data]
      }
      expect(state.playerCards.length).toEqual(newPalyerState.playerCards.length);
    });
  });

  describe('UpdatePlayerCard', () => {
    it('should update card to the list', () => {
      const data = testCardList[0];
      const init : IPlayerCardState = {
        ...initPlayerCardState,
        playerCards : [data]
      };      
      const payload : IPlayerCard = {
        ...data,
        firstName : "test",
      };      
      const action = playerCardActions.updatePlayerCard({payload: payload});
      const state = playerCardReducer(init, action);
      const newPalyerState : IPlayerCardState = {
        ...initPlayerCardState,
        playerCards : [payload]
      }
      expect(state.playerCards.length).toEqual(newPalyerState.playerCards.length);
      expect(state.playerCards[0].firstName).toEqual('test');
    });
  });


  describe('DeletePlayerCard', () => {
    it('should delete card from the list', () => {
      const data = testCardList[0];
      const init : IPlayerCardState = {
        ...initPlayerCardState,
        playerCards : [data]
      };    
      const action = playerCardActions.deletePlayerCard({payload: data.id});
      const state = playerCardReducer(init, action);
      const newPalyerState : IPlayerCardState = {
        ...initPlayerCardState,
        playerCards : []
      }
      expect(state.playerCards.length).toEqual(newPalyerState.playerCards.length);
    });
  });

  describe('GetCardById', () => {
    it('should get card from the list', () => {
      const data = testCardList[0];
      const init : IPlayerCardState = {
        ...initPlayerCardState,
        playerCards : [data]
      };    
      const action = playerCardActions.getPlayerCardById({payload: data.id});
      const state = playerCardReducer(init, action);     
      expect(state.selectedPlayerCard).toEqual(data);
    });
  });

  
});