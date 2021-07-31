<template>
  <div class="btn-wrapper">
    <button class="v-icon"
            :class="getClassNames"
            @click="$emit('handler')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script src="./V-Button.js"></script>
