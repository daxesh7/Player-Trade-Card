import { IPlayerCardState } from './player.state';
import { ITeamState } from './teams.state';

export interface AppState {
    playerCardState : IPlayerCardState
    teamsState : ITeamState
}