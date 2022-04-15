export default {
  namespaced: true,

  state: () => ({
    tasks: [],
    editingTask: null,
  }),

  getters: {
    getTasksByID(state, id) {
      return state.tasks.find(task => task.id === id)
    }
  },

  mutations: {
    ADD_TASK(state, task) {
      if (!state.tasks.find(t => t.title === task.title)) {
        state.tasks.push(task)
      }
    },

    SET_EDITING_TASK(state, task) {
      state.editingTask = task
    },

    EDIT_TASK(state, task) {
      state.tasks.forEach((t, index) => {
        if (t.id === task. id) {
          state.tasks[index] = task
          state.editingTask = null
        }
      })
    },

    DELETE_TASK(state, task) {
      state.tasks.forEach((t, index) => {
        if (t.id === task. id) {
          state.tasks.splice(index, 1)
        }
      })
    }
  },
}