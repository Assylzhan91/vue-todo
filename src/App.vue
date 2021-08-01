<template>
  <div class="container">
    <v-header/>
    <v-header-title/>
    <v-form/>
    <v-todo-list/>
    <v-toolbar/>
  </div>
</template>

<script>
import VToolbar from './components/VToolbar/'
import VTodoList from './components/VTodoList'
import VForm from './components/VForm'
import VHeaderTitle from './components/VHeaderTitle'
import VHeader from './components/VHeader'

  export default {
    name: 'App',
    data () {
      return {
        imgUrl: 'assets/images/night.jpg'
      }
    },
    computed: {},
    methods: {
      someCLick (e) {
        console.log(e.currentTarget)
      }
    },
    components: {
      VToolbar,
      VTodoList,
      VForm,
      VHeaderTitle,
      VHeader
    }
  }
</script>
