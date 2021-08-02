import VListItem from './components'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'VTodoList',
  mounted () {
    this.setLocalTodoList()
  },
  methods: {
    ...mapMutations([
      'setLocalTodoList'
    ])
  },
  computed: {
    ...mapGetters([
      'todoList'
    ])
  },
  components: {
    VListItem
  }
}
