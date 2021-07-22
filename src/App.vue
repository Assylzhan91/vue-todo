<template>
  <div class="container">
    <header class="v-header">
      <div class="v-header__wrapper p-2"
      >
        <div class="v-header__data v-header__data--day">Tuesday, 30th</div>
        <div class="v-header__data v-header__data--month">March</div>
      </div>
    </header>
    <div class="v-header-title v-text--center m-2">
      My TODO List
    </div>
    <div class="v-form-block">
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
            <input type="text" class="v-form__input">
            <button class="v-button v-button--add">Add todo</button>
          </div>
        </div>
      </form>
      <div class="v-todo-list-wrapper">
        <ul class="v-todo-list mt-30">
          <li class="v-todo-list__item p-20">
            <span class="v-icon v-todo-list__complete"></span>
            <span class="v-todo-list__icon"></span>
            <div class="v-todo-list__text">Feed the cat</div>
            <span class="v-icon v-todo-list__edit"></span>
            <span class="v-icon v-todo-list__remove"></span>
          </li>
        </ul>
      </div>
      <div class="v-toolbar">
        <div class="v-toolbar__item">
          <button class="v-toolbar__button">All</button>
        </div>
        <div class="v-toolbar__item">
          <button class="v-toolbar__button">Done</button>
        </div>
        <div class="v-toolbar__item">
          <button class="v-toolbar__button">Active</button>
        </div>
        <div class="v-toolbar__item v-toolbar__item--rm-all">
          <button class="v-toolbar__button"><span></span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        imgUrl: 'assets/images/night.jpg'
      }
    },
    computed: {},
    components: {}
  }
</script>
