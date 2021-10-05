import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoWidgetComponent } from './widget/todo-widget.component';
import { TodoListComponent } from './ui/todo-list/todo-list.component';
import { TodoItemComponent } from './ui/todo-item/todo-item.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './state/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({
  declarations: [TodoWidgetComponent, TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [TodoWidgetComponent],
})
export class TodoModule {}
