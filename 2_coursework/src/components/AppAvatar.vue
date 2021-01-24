<template>
  <div class="avatar">
    <img :src="src" alt="Avatar">
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',

  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
