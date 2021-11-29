import {Action, createAction , props} from '@ngrx/store';
import {IPlayerCard} from '../../models/player.model';

export enum PlayerAction {
    ADD_PLAYER_CARD = 'ADD_PLAYER_CARD',
    UPDATE_PLAYER_CARD = 'UPDATE_PLAYER_CARD',
    DELETE_PLAYER_CARD = 'DELETE_PLAYER_CARD',
    GET_PLAYER_CARDS = 'GET_PLAYER_CARDS',
    GET_PLAYER_CARD_BY_ID = 'GET_PLAYER_CARD_BY_ID'
};

export  const addPlayerCard = createAction(
    PlayerAction.ADD_PLAYER_CARD,
    props<{payload : IPlayerCard}>()
)

export const updatePlayerCard = createAction(
    PlayerAction.UPDATE_PLAYER_CARD,
    props<{payload : IPlayerCard}>()
)

export const deletePlayerCard = createAction(
    PlayerAction.DELETE_PLAYER_CARD,
    props<{payload : number}>()
)

export const getPlayerCards = createAction(
    PlayerAction.GET_PLAYER_CARDS,
)

export const getPlayerCardById = createAction(
    PlayerAction.GET_PLAYER_CARD_BY_ID,
    props<{payload : number}>()
)

