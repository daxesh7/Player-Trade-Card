import { v4 as uuid } from 'uuid';

export interface IPlayerCard {    
    id : string;
    playerNumber: number | null ;
    firstName : string;
    lastName: string;
    teamName: string;
    cardValue : number | null;
}

export const initPlayerCard : IPlayerCard = {
    id : '0',
    playerNumber: null,
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

export interface ITeamsResponse {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export const initTeamResponse : ITeamsResponse[] = [
    {
        "id": 1,
        "abbreviation": "ATL",
        "city": "Atlanta",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Atlanta Hawks",
        "name": "Hawks"
    },
    {
        "id": 2,
        "abbreviation": "BOS",
        "city": "Boston",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Boston Celtics",
        "name": "Celtics"
    }
];