<template>
  <ul class="v-todo-list mt-30 mb-30" v-if="todoList.length">
    <v-list-item
      v-for="item of todoList"
      :todo="item"
      :key="item.id"
      @checked="checkedHandler(item.id)"
      @remove="removeHandler(item.id)"
      @edit="editHandler"
    />
    </ul>
    <div v-else>
      <h1 class="v-text--center"> Todo is empty. Add todo</h1>
    </div>
</template>

<script src="./VTodoList.js"></script>
