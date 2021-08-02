import VButton from '../V-Button'
import { mapMutations } from 'vuex'

export default {
  name: 'VToolbar',
  methods: {
    ...mapMutations([
      'cancelRemove'
    ]),
    removeAllTodo () {
      this.$store.dispatch('removeAllTodo')
    }
  },
  components: {
    VButton
  }
}
