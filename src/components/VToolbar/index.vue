<template>
  <div class="v-toolbar">
    <v-popup
      v-if="getClosedPopup"
    />
    <div class="v-toolbar__item"
         v-for="(item, id) of getToolbarItems"
         :key="id"
    >
      <v-button
        :text="item.text"
        classWrapper="d-flex"
        :classNames="[
          {'v-toolbar__button': true},
          {'is-active': item.isActive}
        ]"
        @handler="handlerAll(id)"
      />
    </div>
<!--    <div class="v-toolbar__item">
      <v-button
        text="Done"
        classWrapper="d-flex"
        classNames="v-toolbar__button"
        @handler="allDoneTodo"
      />
    </div>
    <div class="v-toolbar__item">
      <button class="v-toolbar__button">Active</button>
    </div>-->

    <div class="v-toolbar__item ml-auto v-toolbar__item--rm-all">
      <v-button
        text="Remove all todo"
        classWrapper="d-flex"
        classNames="v-toolbar__button"
        @handler="popupHandler"
      />
    </div>
  </div>
</template>

<script src="./VToolbar.js"></script>
