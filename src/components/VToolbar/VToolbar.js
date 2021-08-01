import VButton from '../V-Button'
import VPopup from '../VPopup'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'VToolbar',
  computed: {
    ...mapGetters([
      'getClosedPopup',
      'getAllDoneTodo'
    ])
  },
  methods: {
    ...mapMutations([
      'popupHandler',
      'AllDoneTodo'
    ])
  },
  components: {
    VButton,
    VPopup
  },
  watch: {
    getClosedPopup: function (val) {
      if (val) {
        document.body.classList.add('anchor')
      } else {
        document.body.classList.remove('anchor')
      }
    }
  }
}
