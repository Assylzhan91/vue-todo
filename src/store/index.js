import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [],
    todoListDone: [],
    todoListActive: [],
    enterTitleTodo: '',
    idTodo: 1,
    closedPopup: false,
    toolbarItems: [
      {
        text: 'All',
        isActive: true,
        list: 'todoList'
      },
      {
        text: 'Done',
        isActive: false,
        list: 'todoListDone'
      },
      {
        text: 'Active',
        isActive: false,
        list: 'todoListActive'
      }
    ]
  },
  mutations: {
    setLocalStorage (state) {
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
      localStorage.setItem('toolbarItems', JSON.stringify(state.toolbarItems))
    },
    setLocalTodoList (state) {
      const todoFromLocalStorage = JSON.parse(localStorage.getItem('todoList'))
      const todoListDone = JSON.parse(localStorage.getItem('todoListDone'))
      if (todoFromLocalStorage.length) {
        if (state.toolbarItems[1].isActive) {
          console.log(state.toolbarItems[1].isActive)
          state.todoListDone = todoListDone
        } else {
          state.todoList = todoFromLocalStorage
        }
      }
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
    popupHandler (state) {
      state.closedPopup = true
    },
    cancelRemove (state) {
      state.closedPopup = false
    },
    removeAllTodo (state) {
      if (state.todoList.length) {
        state.todoList = []
        state.closedPopup = false
        for (let i = 0; i < state.toolbarItems.length; i++) {
          localStorage.setItem(state.toolbarItems[i].list, JSON.stringify([]))
        }
        // localStorage.setItem('todoList', JSON.stringify([]))
        // localStorage.setItem('toolbarItems', JSON.stringify([]))
        // localStorage.setItem('toolbarItems', JSON.stringify([]))
      }
    },
    allCommonHandler (state, payload) {
      state.toolbarItems.map((item, id) => {
        if (id === payload) item.isActive = true
        else item.isActive = false
      })
    },
    allTodoOwnHandler (state) {
      localStorage.setItem('todoListDone', JSON.stringify(state.todoList))
    },
    doneTodoOwnHandler (state) {
      state.todoListDone = state.todoList.filter(item => item.isDone)
      localStorage.setItem('todoListDone', JSON.stringify(state.todoListDone))
    },
    activeTodoOwnHandler (state) {
      state.todoListActive = state.todoList.filter(item => !item.isDone)
      localStorage.setItem('todoListActive', JSON.stringify(state.todoListActive))
    }
  },
  getters: {
    todoList: state => {
      for (let i = 0; i < state.toolbarItems.length; i++) {
        if (state.toolbarItems[i].isActive) {
         return state[state.toolbarItems[i].list]
        }
      }
    },
    getTodoListDone: state => state.todoListDone,
    getEnterTitleTodo: state => {
      return state.enterTitleTodo
    },
    todoListById: s => i => s.todoList.find(t => t.id === i),
    getClosedPopup: state => state.closedPopup,
    getToolbarItems: state => state.toolbarItems,
    getToolbarItemsById: state => idx => state.toolbarItems.find((item, id) => id === idx)
  },
  actions: {
    removeAllTodo ({ commit }) {
      commit('removeAllTodo')
    },
    addTodoItem ({ commit, state }) {
      commit('addTodoItem', state.enterTitleTodo)
      commit('setLocalStorage')
      commit('activeTodoOwnHandler')
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
    },
    actionAllTodo ({ commit, getters }, id) {
      commit('allCommonHandler', id)
      if (getters.getToolbarItemsById(id).text === 'All') {
        commit('allTodoOwnHandler')
      }
      if (getters.getToolbarItemsById(id).text === 'Done') {
        commit('doneTodoOwnHandler')
      }
      if (getters.getToolbarItemsById(id).text === 'Active') {
        commit('activeTodoOwnHandler')
      }
      commit('setLocalStorage')
    }
  }
})
