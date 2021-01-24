<template>
  <p v-if="$slots.default || text">
    {{ text }}
    <slot />
  </p>
</template>

<script>
export default {
  name: 'AppTextBlock',

  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
