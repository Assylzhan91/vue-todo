import VListItem from './components'

export default {
  name: 'VTodoList',
  data: () => ({
    todoList: [
      // {
      //   id: 1,
      //   description: 'Todo 1',
      //   isDone: true,
      //   checked: 'checked',
      //   remove: 'remove',
      //   edit: 'edit'
      // },
      // {
      //   id: 2,
      //   description: 'Todo 2',
      //   isDone: false,
      //   checked: 'checked',
      //   remove: 'remove',
      //   edit: 'edit'
      // },
      // {
      //   id: 3,
      //   description: 'Todo 3',
      //   isDone: false,
      //   checked: 'checked',
      //   remove: 'remove',
      //   edit: 'edit'
      // }
    ]
  }),
  mounted () {
    const parseTodoObj = JSON.parse(localStorage.getItem('todoList'))
    if (parseTodoObj.length) {
      this.todoList = parseTodoObj
    }
  },
  methods: {
    checkedHandler (idx) {
      const id = this.todoList.find(item => idx === item.id)
      id.isDone = !id.isDone
      this.saveTodoLocal()
    },
    removeHandler (idx) {
      const isRemoving = confirm('Are you sure to remove this todo')
      if (isRemoving) {
        this.todoList = this.todoList.filter(item => idx !== item.id)
        this.saveTodoLocal()
      }
    },
    editHandler () {
      console.log('editHandler')
    },
    saveTodoLocal () {
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    }
  },
  components: {
    VListItem
  }
}
