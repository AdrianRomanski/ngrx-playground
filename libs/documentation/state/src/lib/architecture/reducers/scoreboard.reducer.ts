import { Action, createReducer, on } from '@ngrx/store';
import { awayScore, homeScore, resetScore, setScores } from './scoreboard-page.actions';
export const initialState: State = {
  home: 0,
  away: 0,
};

export interface State {
  home: number;
  away: number;
}

export const scoreboardReducer = createReducer(
  initialState,
  on(homeScore, state => ({ ...state, home: state.home + 1 })),
  on(awayScore, state => ({ ...state, away: state.away + 1 })),
  on(resetScore, state => ({ home: 0, away: 0 })),
  on(setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);
