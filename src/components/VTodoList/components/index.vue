<template>
  <li class="v-todo-list__item p-10 mb-10 11">
    <div class="v-todo-list__checkbox mr-15">
      <v-button
        :typeButton="setCheckedTodo"
        classNames="v-todo-list__btn mr-30"
        @handler="$emit(todo.checked)"
      />
    </div>
    <div
      class="v-todo-list__text mr-auto"
      :class="{'completed': todo.isDone}"
    >{{ todo.description }}</div>
    <v-button
      typeButton="edit"
      classNames="v-todo-list__btn mr-30"
      @handler="$emit(todo.edit)"
    />
    <v-button
      typeButton="remove"
      classNames="v-todo-list__btn"
      @handler="$emit(todo.remove)"
    />
    <span class="v-icon v-todo-list__edit mr-30"></span>
    <span class="v-icon v-todo-list__remove"></span>
  </li>
</template>

<script src="./VListItem.js"></script>
