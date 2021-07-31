import { months, days } from '../../v-library/date'
export default {
  name: 'VHeader',
  computed: {
    today () {
      return new Date()
    },
    getMonth () {
      return months[this.today.getMonth()]
    },
    getDay () {
      return days[this.today.getDay() - 1]
    },
    getDayDate () {
      return this.today.getDate()
    }
  }
}
