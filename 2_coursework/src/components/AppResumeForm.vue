<template>
  <form @submit.prevent="submitFormHandler">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="form.type">
        <option :value="ComponentModel.Title.type">Заголовок</option>
        <option :value="ComponentModel.Subtitle.type">Подзаголовок</option>
        <option :value="ComponentModel.Avatar.type">Аватар</option>
        <option :value="ComponentModel.TextBlock.type">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="form.value" />
    </div>

    <button class="btn primary" :disabled="formSubmitDisable">
      Добавить
    </button>
  </form>
</template>

<script>
import ComponentModel from '@/assets/models/ComponentModel.js'

export default {
  name: 'AppResumeForm',

  emits: {
    submitData: ({ type, value }) => {
      if (type && value.length > 4) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    },
    error: String
  },

  data() {
    return {
      ComponentModel,
      form: {
        type: ComponentModel.Title.type,
        value: ''
      }
    }
  },

  computed: {
    formSubmitDisable() {
      return this.form.value.length < 4
    }
  },

  methods: {
    submitFormHandler() {
      if (!this.formSubmitDisable) {
        if (
          this.form.type === ComponentModel.Avatar.type &&
          !this.isUrl(this.form.value)
        ) {
          this.$emit('error', 'Данная ссылка не корректна!')
          return
        }

        this.$emit('submitData', {
          type: this.form.type,
          value: this.form.value
        })

        this.resetForm()
      }
    },

    resetForm() {
      this.form.value = ''
      this.form.type = ComponentModel.Title.type
    },

    isUrl(str) {
      const regex = /(https?:\/\/.*\.(?:png|jpg|svg|jpeg|webp))/i
      return regex.test(str)
    }
  }
}
</script>
