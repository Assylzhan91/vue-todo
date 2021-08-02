import VListItem from './index'
import VButton from '../../V-Button'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'VListItem',
  props: {
    todo: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    this.setLocalTodoList()
  },
  computed: {
    ...mapGetters([
      'todoListById',
      'todoList'
    ]),
    setCheckedTodo () {
      return {
        checked: this.todo.isDone
      }
    }
  },
  methods: {
    ...mapMutations([
      'setLocalTodoList'
    ]),
    editHandler (id) {
      this.$store.dispatch('editHandler', id)
    },

    editHandlerBtn (id) {
      this.$store.dispatch('editHandlerBtn1', id)
      this.$nextTick(() => { this.$refs.edited.focus() })
    },
    checkedHandler (id) {
      this.$store.dispatch('checkedHandler', id)
    },
    deleteHandler (id) {
      this.$store.dispatch('deleteHandler', id)
    }
  },
  components: {
    VListItem,
    VButton
  }
}
