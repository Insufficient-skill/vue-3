<template>
  <app-alert :alert="alert" @close="alert = null" />
  <div class="container column">
    <app-resume-form
      class="card card-w30"
      @submit-data="submitFormHandler"
      @error="submitFormErrorHandler"
    />
    <div class="card card-w70">
      <template v-if="Object.keys(resumeData).length">
        <template v-for="item in resumeData" :key="item.type + item.value">
          <component
            :is="ComponentModel.TYPE_TO_DATA[item.type].component"
            v-bind="{
              [ComponentModel.TYPE_TO_DATA[item.type].propName]: item.value
            }"
          />
        </template>
      </template>
      <template v-else>
        <h3>Добавьте первый блок, чтобы увидеть результат</h3>
      </template>
    </div>
  </div>

  <div class="container">
    <button
      v-if="!comments.loading && !comments.data"
      class="btn primary"
      @click="loadComments"
    >
      Загрузить комментарии
    </button>
    <app-loader v-if="comments.loading" />
    <template v-else-if="comments.data">
      <app-comments-list :comments="comments.data" />
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import AppAlert from '@/components/AppAlert'
import AppLoader from '@/components/AppLoader'
import ComponentModel from '@/assets/models/ComponentModel'
import AppResumeForm from '@/components/AppResumeForm'
import AppCommentsList from '@/components/AppCommentsList'

const API =
  'https://vue-3-resume-default-rtdb.europe-west1.firebasedatabase.app'

export default {
  name: 'App',

  components: {
    AppAlert,
    AppLoader,
    AppCommentsList,
    AppResumeForm
  },

  data() {
    return {
      comments: {
        data: null,
        loading: false
      },
      resumeData: {},
      alert: null,
      ComponentModel
    }
  },

  mounted() {
    this.loadResumeData()
  },

  methods: {
    async loadResumeData() {
      try {
        const response = await axios.get(`${API}/resume.json`)

        if (response.status === 200) {
          if (response.data) {
            this.resumeData = response.data
          }
        } else {
          throw new Error('Данные резюме не были получены!')
        }
      } catch (e) {
        this.createAlert('error', 'Ошибка!', e.message)
      }
    },

    async loadComments() {
      try {
        this.comments.loading = true
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/comments?_limit=42'
        )
        if (response.status === 200) {
          this.comments.data = response.data
          this.comments.loading = false
        } else {
          throw new Error('Комментарии не были получены!')
        }
      } catch (e) {
        this.comments.loading = false
        this.createAlert('error', 'Ошибка!', e.message)
      }
    },

    async submitFormHandler(data) {
      try {
        const response = await axios.post(`${API}/resume.json`, { ...data })
        if (response.status === 200) {
          this.resumeData[response.data.name] = { ...data }
        } else {
          throw new Error(
            'Данные не были загружены на сервер, повторите попытку!'
          )
        }
      } catch (e) {
        this.createAlert('error', 'Ошибка!', e.message)
      }
    },

    submitFormErrorHandler(error) {
      this.createAlert('error', 'Ошибка!', error)
    },

    createAlert(type, title, message) {
      this.alert = {
        type,
        title,
        message
      }
    }
  }
}
</script>
