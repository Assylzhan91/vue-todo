export default {
  name: 'VHeaderTitle',
  data () {
    return {
      title: 'Title',
      isShow: true
    }
  },
  mounted () {
    this.setTitleTodo()
  },
  methods: {
    startEditTitleHandler () {
      this.isShow = false
      setTimeout(this.focusInput)
    },
    setTitleTodo () {
      const lcStorage = localStorage.getItem('titleHeader')
      if (lcStorage) {
        this.title = lcStorage
      }
    },
    focusInput () {
      this.$refs.editTitle.focus()
    },
    finishedEditTitleHandler () {
      if (!this.title.length) {
        alert('Please, enter your todo at least 1 character')
        this.title = localStorage.getItem('titleHeader')
        return
      }
      localStorage.setItem('titleHeader', this.title)
      this.isShow = true
    }
  }

}
