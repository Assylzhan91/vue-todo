<template>
  <li class="v-todo-list__item p-10 mb-10 11">
    <div class="v-todo-list__checkbox mr-15">
      <span class="v-icon v-todo-list__complete m-auto"></span>
    </div>
    <div class="v-todo-list__text mr-auto">Feed the cat</div>
    <span class="v-icon v-todo-list__edit mr-30"></span>
    <span class="v-icon v-todo-list__remove"></span>
  </li>
</template>

<script>
export default {
  name: 'VListItem'
}
</script>
