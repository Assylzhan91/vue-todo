import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [],
    enterTitleTodo: '',
    idTodo: 1,
    closedPopup: false
  },
  mutations: {
    setLocalStorage (state) {
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
    },
    addTodoItem (state, payload) {
      try {
        if (!payload.length) {
          throw new Error('Please, enter title todo at least 1 character')
        }
        const firstCharacterToUpper = payload.charAt(0).toUpperCase() + payload.slice(1)
        if (!state.todoList.length) {
          state.todoList.push({
            id: 1,
            description: firstCharacterToUpper,
            isDone: false,
            isEdited: false
          })
        } else {
          const lastTodoItem = state.todoList[state.todoList.length - 1]
          state.todoList.push({
            id: lastTodoItem.id + 1,
            description: firstCharacterToUpper,
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
      const getItemLocalTodo = JSON.parse(localStorage.getItem('todoList')).find(item => item.id === payload)
      if (idx.description.length) {
        idx.isEdited = false
      } else {
        alert('Please, edit at least 1  character')
        idx.description = getItemLocalTodo.description
      }
    },
    editHandlerBtn (state, payload) {
      const item = state.todoList.find(t => t.id === payload)
      item.isEdited = true
    },
    setLocalTodoList (state) {
      const todoFromLocalStorage = JSON.parse(localStorage.getItem('todoList'))
       if (todoFromLocalStorage.length) {
         state.todoList = todoFromLocalStorage
      }
    },
    popupHandler (state) {
      console.log('popupHandler')
      state.closedPopup = true
    },
    cancelRemove (state) {
      state.closedPopup = false
    },
    removeAllTodo (state) {
      if (state.todoList.length) {
        state.todoList = []
        state.closedPopup = false
        localStorage.setItem('todoList', JSON.stringify([]))
      }
    },
    AllDoneTodo (state) {
      state.todoList = state.todoList.filter(t => t.isDone)
    }
  },
  getters: {
    todoList: state => {
      return state.todoList
    },
    getEnterTitleTodo: state => {
      return state.enterTitleTodo
    },
    todoListById: s => i => s.todoList.find(t => t.id === i),
    getClosedPopup: state => state.closedPopup,
    allDoneTodo: (state, getters) => {
    // console.log(state.todoList)
    //   // state.todoList.filter(t => t.isDone)
    },
    allTodo: state => {
      // state.todoList.filter(t => t.isDone)
    }
  },
  actions: {
    removeAllTodo ({ commit }) {
      commit('removeAllTodo')
    },
    addTodoItem ({ commit, state }) {
      commit('addTodoItem', state.enterTitleTodo)
      commit('setLocalStorage')
    },
    checkedHandler ({ commit }, id) {
      commit('checkedHandler', id)
      commit('setLocalStorage')
    },
    deleteHandler ({ commit }, id) {
      commit('deleteHandler', id)
      commit('setLocalStorage')
    },
    editHandler ({ commit }, id) {
      commit('editHandler', id)
      commit('setLocalStorage')
    },
    editHandlerBtn1 ({ commit }, id) {
       commit('editHandlerBtn', id)
    },
    popupHandler2 ({ commit }) {
      commit('popupHandler')
    }
  }
})
