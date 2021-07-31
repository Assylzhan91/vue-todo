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
    editedTitleHandler () {
      if (!this.title.length) {
        alert('Please, enter your todo at least 1 character')
        this.title = localStorage.getItem('titleHeader')
        return
      }
      this.isShow = true
      localStorage.setItem('titleHeader', this.title)
    },
    setTitleTodo () {
      const lcStorage = localStorage.getItem('titleHeader')
      if (lcStorage) {
        this.title = lcStorage
      }
    }
  }

}
