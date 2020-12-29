import { createReducer, Action, on } from '@ngrx/store'
import * as fromHomeActions from './home.actions'

export interface HomeState {
  entity: any,
  load: boolean,
  error: boolean,
}

export const homeInitialState: HomeState = {
  entity: undefined,
  load: false,
  error: false,
}

const reducer = createReducer(
  homeInitialState,

  on(fromHomeActions.loadCurrentWeather, state => ({
    ...state,
    load: true,
    error: false,
  })),

  on(fromHomeActions.loadCurrentWeatherSuccess, (state, {entity}) => ({
    ...state,
    entity,
    load: false,
  })),

  on(fromHomeActions.loadCurrentWeatherFailed, state => ({
    ...state,
    load: false,
    error: true,
  }))


)

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action)
}
