import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { IPlayerCardState } from '../state/player.state';
 
 
export const playerCardState = (state: AppState) => state.playerCardState;
 
export const selectorGetPlayerCards = createSelector(
    playerCardState,
  (state: IPlayerCardState) => state?.playerCards
);

// export const getPlayerlist = createSelector(
//     playerCardState,
//   (state: IPlayerCardState) => state.playerList
// );

export const selectorGetSelectedPlayerCard = createSelector(
    playerCardState,
  (state: IPlayerCardState) => state?.selectedPlayerCard
);

export const selctorGetSearchQuery = createSelector(
    playerCardState,
  (state: IPlayerCardState) => state?.searchQuery
);

export const selectorIsLoading = createSelector(
  playerCardState,
(state: IPlayerCardState) : boolean => state?.isLoading
);