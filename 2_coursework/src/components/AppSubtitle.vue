<template>
  <h2 v-if="$slots.default || text">
    {{ text }}
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'AppSubtitle',

  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  h2 {
    font-size: 1.65rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #eaecef;
  }
</style>
