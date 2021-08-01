<template>
  <div class="v-popup">
    <div class="v-popup__window">
      <h2 class="v-text--center">Are you sure you want to delete all Todo tasks?</h2>
      <div class="v-popup__wrapper">
        <v-button
          text="YES"
          classNames="v-popup__btn ok"
          classWrapper="mr-30"
          @handler="removeAllTodo"
        />
        <v-button
          text="NO"
          classNames="v-popup__btn cancel"
          @handler="cancelRemove"
        />
      </div>
    </div>
    </div>
</template>

<script src="./VPopup.js"></script>
