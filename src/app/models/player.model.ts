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

// export const initPlayerCardList : IPlayerCard[] = [];
export const initPlayerCardList : IPlayerCard[] = [
    {firstName:' Ike' , lastName:'Anigbogu' , playerNumber: 14 , teamName: 'Indiana Pacers'},
    {firstName:' Ron' , lastName:'Baker' , playerNumber: 47 , teamName: 'Knicks'},
    {firstName:' Jabari' , lastName:'Bird' , playerNumber: 25 , teamName: 'Boston Celtics' , cardValue: 2}
];
