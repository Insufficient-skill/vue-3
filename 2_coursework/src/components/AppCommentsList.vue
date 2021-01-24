<template>
  <div class="card">
    <app-subtitle>Комментарии</app-subtitle>

    <template v-if="comments.length !== 0">
      <ul class="list" v-for="comment in comments" :key="comment.id">
        <li class="list-item">
          <p><strong>{{ comment.email }}</strong></p>
          <small>{{ comment.body }}</small>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>Комментариев нет!</p>
    </template>
  </div>
</template>

<script>
import AppSubtitle from '@/components/AppSubtitle'

export default {
  name: 'AppCommentsList',

  components: {
    AppSubtitle
  },

  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .list-item {
    padding: 0.5rem 0;
  }
</style>
