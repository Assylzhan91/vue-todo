<template>
  <li class="v-todo-list__item p-10 mb-10">
    <div class="v-todo-list__checkbox mr-15">
      <v-button
        :typeButton="setCheckedTodo"
        classNames="v-todo-list__btn mr-30"
        @handler="checkedHandler(todo.id)"
      />
    </div>
    <div class="v-todo-list__text mr-auto">
      <div v-if="!todo.isEdited"
        :class="{'completed': todo.isDone}"
      >{{ todo.description }}</div>
      <input
        v-else
        type="text"
        class="v-todo-list__edit"
        @blur="editHandler(todo.id)"
        @keypress.enter="editHandler(todo.id)"
        v-model="todo.description"
        :ref="'edited'"
      >
    </div>
    <v-button
      typeButton="edit"
      classNames="v-todo-list__btn"
      :classWrapper="'mr-30 ml-30'"
      @handler="editHandlerBtn(todo.id)"
    />
    <v-button
      typeButton="remove"
      classNames="v-todo-list__btn"
      @handler="deleteHandler(todo.id)"
    />
  </li>
</template>

<script src="./VListItem.js"></script>
