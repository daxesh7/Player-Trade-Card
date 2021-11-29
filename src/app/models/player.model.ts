export interface IPlayerCard {    
    playerNumber: number ;
    firstName : string;
    lastName: string;
    teamName: string;
    cardValue : number | null;
}

export const initPlayerCard : IPlayerCard = {
    playerNumber: 0,
    firstName : '',
    lastName: '',
    teamName: '',
    cardValue : null
}

// export const initPlayerCardList : IPlayerCard[] = [];
export const initPlayerCardList : IPlayerCard[] = [
    {firstName:' Ike' , lastName:'Anigbogu' , playerNumber: 14 , teamName: 'Indiana Pacers' , cardValue : 0},
    {firstName:' Ron' , lastName:'Baker' , playerNumber: 47 , teamName: 'Knicks' , cardValue : 0},
    {firstName:' Jabari' , lastName:'Bird' , playerNumber: 25 , teamName: 'Boston Celtics' , cardValue: 2}
];