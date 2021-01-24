<template>
  <h1 v-if="$slots.default || text">
    {{ text }}
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'AppTitle',

  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
