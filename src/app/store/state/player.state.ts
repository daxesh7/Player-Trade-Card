import { initPlayerCard, initPlayerCardList, IPlayerCard } from 'src/app/models/player.model';

export interface IPlayerCardState {
    playerList : Array<Object>,
    playerCards : Array<IPlayerCard>,
    selectedPlayerCard: IPlayerCard,
    searchQuery : string;
    totalCardValue : number;
};

export const initPlayerCardState : IPlayerCardState = {
    playerList : [],
    playerCards: [],
    selectedPlayerCard: initPlayerCard,
    searchQuery: '',
    totalCardValue : 0
};