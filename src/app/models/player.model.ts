import { v4 as uuid } from 'uuid';

export interface IPlayerCard {    
    id : string;
    playerNumber: number ;
    firstName : string;
    lastName: string;
    teamName: string;
    cardValue : number | null;
}

export const initPlayerCard : IPlayerCard = {
    id : '0',
    playerNumber: 0,
    firstName : '',
    lastName: '',
    teamName: '',
    cardValue : null
}

export const initPlayerCardList : IPlayerCard[] = [];
// export const initPlayerCardList : IPlayerCard[] = [
//     {id : uuid(),firstName:' Ike' , lastName:'Anigbogu' , playerNumber: 14 , teamName: 'Indiana Pacers' , cardValue : 0},
//     {id: uuid() ,firstName:' Ron' , lastName:'Baker' , playerNumber: 47 , teamName: 'Knicks' , cardValue : 0},
//     {id : uuid(), firstName:' Jabari' , lastName:'Bird' , playerNumber: 25 , teamName: 'Boston Celtics' , cardValue: 2}
// ];