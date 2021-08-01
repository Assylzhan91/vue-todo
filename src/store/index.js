import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [
      {
        id: 1,
        description: 'Todo 1',
        isDone: true,
        isEdited: false
      }
    ],
    enterTitleTodo: '',
    idTodo: 1
  },
  mutations: {
    addTodoItem (state, payload) {
      try {
        if (!payload.length) {
          throw new Error('Please, enter title todo at least 1 character')
        }
        if (!state.todoList.length) {
          state.todoList.push({
            id: 1,
            description: payload,
            isDone: false,
            isEdited: false
          })
        } else {
          const lastTodoItem = state.todoList[state.todoList.length - 1]
          state.todoList.push({
            id: lastTodoItem.id + 1,
            description: payload,
            isDone: false,
            isEdited: false
          })
        }
        state.enterTitleTodo = ''
      } catch (err) {
        alert(err.message)
      }
    },
    checkedHandler (state, payload) {
      const idx = state.todoList.find(item => item.id === payload)
      idx.isDone = !idx.isDone
    },
    deleteHandler (state, payload) {
      const confirmDelete = confirm('Are you sure to delete this todo?')
      if (confirmDelete) {
        state.todoList = state.todoList.filter(item => item.id !== payload)
      }
    },
    editHandler (state, payload) {
      const idx = state.todoList.find(item => item.id === payload)
      idx.isEdited = false
    },
    setLocalTodoList (state) {
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
    }
  },
  getters: {
    todoList: state => {
      return state.todoList
    },
    getEnterTitleTodo: state => {
      return state.enterTitleTodo
    },
    todoListById: state => id => {
      return state.todoList.find(todo => todo.id === id)
    }
  }
})
