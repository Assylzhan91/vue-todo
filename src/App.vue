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
        <ul class="v-todo-list mt-30 mb-30">
          <li class="v-todo-list__item p-10 mb-10">
            <div class="v-todo-list__checkbox mr-15">
              <span class="v-icon v-todo-list__complete m-auto"></span>
            </div>
            <div class="v-todo-list__text mr-auto">Feed the cat</div>
            <span class="v-icon v-todo-list__edit mr-30"></span>
            <span class="v-icon v-todo-list__remove"></span>
          </li>
        </ul>
      </div>
    </div>
    <VToolbar/>
  </div>
</template>

<script>
import VToolbar from './components/VToolbar'

  export default {
    name: 'App',
    data () {
      return {
        imgUrl: 'assets/images/night.jpg'
      }
    },
    computed: {},
    components: {
      VToolbar
    }
  }
</script>
