import VButton from '../V-Button'
import VPopup from '../VPopup'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'VToolbar',
  computed: {
    ...mapGetters([
      'getClosedPopup',
      'allDoneTodo',
      'allTodo'
    ])
  },
  methods: {
    ...mapMutations([
      'popupHandler'
    ]),
    popupHandler () {
      this.$store.dispatch('popupHandler2')
    }
  },
  watch: {
    getClosedPopup: (val) => {
      if (val) {
        document.body.classList.add('anchor')
      } else {
        document.body.classList.remove('anchor')
      }
    }
  },
  components: {
    VButton,
    VPopup
  }
}
