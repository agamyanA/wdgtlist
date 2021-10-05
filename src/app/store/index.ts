import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from '../features/todo/state/todo.reducer';

export interface AppState {
  [fromTodo.todoFeatureKey]: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
};
