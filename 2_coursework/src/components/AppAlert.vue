<template>
  <div
    v-if="alert"
    class="alert"
  >
    <div class="alert__type" :class="alert.type.toLowerCase()">
    </div>
    <div class="alert__body">
      <div class="alert__content">
        <h3 class="alert__title">{{ alert.title }}</h3>
        <p class="alert__message">{{ alert.message }}</p>
      </div>

      <button
        class="btn"
        :class="alert.type.toLowerCase()"
        @click="$emit('close')">
        Закрыть
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAlert',

  emits: {
    close: null
  },

  props: {
    alert: {
      validator: (value) => {
        // null included
        return typeof value === 'object'
      }
    }
  }
}
</script>

<style scoped>
  .alert {
    position: fixed;
    top: 20px;
    right: 10px;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    max-width: 500px;
    box-shadow: 0 0 3px 3px rgba(0,0,0, 0.3);
  }

  .alert__type {
    width: 30px;
    min-width: 30px;
    margin-right: 20px;
  }

  .btn {
    color: #fff;
    border: none;
  }

  .alert__type.success,
  .btn.success {
    background-color: #42b983;
  }

  .alert__type.error,
  .btn.error {
    background-color: #e53935;
  }

  .alert__type.warn,
  .btn.warn {
    background-color: #c25205;
  }

  .alert__body {
    display: flex;
    align-items: center;
  }

  .alert__content {
    padding: 10px 5px;
    margin-right: 15px;
  }

  .alert__message {
    font-size: 0.9rem;
    line-height: 1.1rem;
    margin: 0;
    color: #ADB6BD;
  }

  .alert__title {
    font-size: 1.2rem;
    line-height: 1.1;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 0 5px;
    color: #454C53;
  }
</style>
