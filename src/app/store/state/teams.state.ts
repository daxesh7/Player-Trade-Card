import { initTeamResponse, ITeamsResponse } from 'src/app/models/player.model';

export interface ITeamState {
    teams : Array<ITeamsResponse>,
    loading: boolean,
    error : string;
};

export const initTeamState : ITeamState = {
    teams : initTeamResponse,
    loading: false,
    error : ''
};