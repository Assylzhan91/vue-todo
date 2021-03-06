import VButton from '../V-Button'
import { mapMutations } from 'vuex'
export default {
  name: 'VForm',
  data: () => ({
    titleTodo: ''
  }),
  computed: {
    getEnterTitleTodo () {
      return this.$store.state.enterTitleTodo
    }
  },
  methods: {
    ...mapMutations([
    ]),
    addTodoItem (enterTitleTodo) {
      this.$store.dispatch('addTodoItem', enterTitleTodo)
    }
  },
  components: {
    VButton
  }
}
