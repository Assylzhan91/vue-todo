<template>
  <div class="v-header-title v-text--center m-2">
    <div v-if="isShow"
         class="v-header-title__wrapper"
         @mouseleave="isShow = false"
         @click="isShow = false"
    >
      <span class="v-header-title__text">
        {{ title }}
      </span>
      <span class="v-icon v-header-title__edit"></span>
    </div>
    <div
      class="v-header-title__cover"
      :class="{show: !isShow}"
      @click="editedTitleHandler"
    />
    <input
      v-if="!isShow"
      type="text"
      class="v-header-title__input"
      v-model="title"
      autofocus
      @keypress.enter="editedTitleHandler"
      ref="edit-title"
      @blur="isShow = false"
    />
  </div>
</template>

<script src="./VHeaderTitle.js"></script>
