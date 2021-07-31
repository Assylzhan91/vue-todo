<template>
  <div class="v-header-title v-text--center m-2">
    <div v-if="isShow"
         class="v-header-title__wrapper"
         @click="startEditTitleHandler"
    >
      <span class="v-header-title__text">
        {{ title }}
      </span>
      <span class="v-icon v-header-title__edit"></span>
    </div>
    <input
      v-if="!isShow"
      type="text"
      class="v-header-title__input"
      v-model="title"
      @keypress.enter="finishedEditTitleHandler"
      ref="editTitle"
      @blur="finishedEditTitleHandler"
    />
  </div>
</template>

<script src="./VHeaderTitle.js"></script>
