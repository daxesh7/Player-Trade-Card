import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { IPlayerCardState } from '../state/player.state';
 
 
export const playerCardState = (state: AppState) => state.playerCardState;
 
/*
  * describe : This is select to  
  * get player cards from application state
  * retrun: Observable<IPlayerCardState[]> 
  */
export const selectorGetPlayerCards = createSelector(
    playerCardState,
  (state: IPlayerCardState) => state?.playerCards
);

/*
  * describe : This is select to  
  * get selected player card from application state
  * retrun: Observable<IPlayerCardState> 
  */
export const selectorGetSelectedPlayerCard = createSelector(
    playerCardState,
  (state: IPlayerCardState) => state?.selectedPlayerCard
);

/*
  * describe : This is select to  
  * get search query from application state
  * retrun: Observable<string> 
  */
export const selctorGetSearchQuery = createSelector(
    playerCardState,
  (state: IPlayerCardState) => state?.searchQuery
);

/*
  * describe : This is select to  
  * get loading from application state
  * retrun: Observable<boolean> 
  */
export const selectorIsLoading = createSelector(
  playerCardState,
(state: IPlayerCardState) : boolean => state?.isLoading
);