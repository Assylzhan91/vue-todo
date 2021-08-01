<template>
  <div :class="getClassWrapper">
    <button class="v-icon"
            :class="getClassNames"
            @click.prevent="$emit('handler')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script src="./V-Button.js"></script>
