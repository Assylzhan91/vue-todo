import VListItem from './components'

export default {
  name: 'VTodoList',
  mounted () {
  },
  computed: {
    todoList () {
     return this.$store.state.todoList
    }
  },
  components: {
    VListItem
  }
}
