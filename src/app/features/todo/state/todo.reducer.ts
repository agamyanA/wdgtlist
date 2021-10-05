import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

export const todoFeatureKey = 'todo';

export interface TodoState {}

export const initialState: TodoState = {};

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => state),
  on(TodoActions.loadTodosSuccess, (state, action) => state),
  on(TodoActions.loadTodosFailure, (state, action) => state)
);
