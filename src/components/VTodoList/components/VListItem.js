import VListItem from './index'
import VButton from '../../V-Button'

export default {
  name: 'VListItem',
  props: {
    todo: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    setCheckedTodo () {
      return {
        checked: this.todo.isDone
      }
    }
  },
  methods: {
    // editHandler () {
    //   console.log('editHandler')
    // },
    // removeHandler () {
    //   console.log('removeHandler')
    // },
    // checkedHandler () {
    //   this.todo.isDone = !this.todo.isDone
    // }
  },
  components: {
    VListItem,
    VButton
  }
}
