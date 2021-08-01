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
      'checkedHandler',
      'deleteHandler',
      'editHandler',
      'setLocalTodoList'
    ]),
    editHandlerBtn (id) {
      const item = this.todoListById(id)
      item.isEdited = !item.isEdited
      this.$nextTick(() => { this.$refs.edited.focus() })
    }
  },
  updated () {
    // this.setLocalTodoList()
  },
  components: {
    VListItem,
    VButton
  }
}
