export interface IPlayerCard {
    playerNumber: number;
    firstName : string;
    lastName: string;
    teamName: string;
    cardValue ?: number;
}

export const initPlayerCard : IPlayerCard = {
    playerNumber: 0,
    firstName : '',
    lastName: '',
    teamName: '',
}
