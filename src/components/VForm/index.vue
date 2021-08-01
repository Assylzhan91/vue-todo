<template>
  <form action="" class="form">
    <div class="v-form__control">
      <div class="v-form__wrapper">
        <i class="v-icon v-form__icon v-form__icon--search"></i>
        <input type="text" class="v-form__input">
        <button class="v-button v-button--search">Search</button>
      </div>
    </div>
    <div class="v-form__control">
      <div class="v-form__wrapper">
        <i class="v-icon v-form__icon v-form__icon--plus"></i>
        <input
          type="text"
          class="v-form__input"
          v-model="$store.state.enterTitleTodo"
          @keypress.enter.prevent="addTodoItem($store.state.enterTitleTodo)"
        >
        <v-button
          text="Add todo"
          classNames="v-button v-button--add"
          @handler="addTodoItem($store.state.enterTitleTodo)"
          classWrapper="d-flex"
        />
      </div>
    </div>
  </form>
</template>

<script src="./VForm.js"></script>
