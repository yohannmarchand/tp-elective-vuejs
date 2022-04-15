export default {
  namespaced: true,

  state: () => ({
    tasks: [],
    editingTask: null,
    selectedTasks: []
  }),

  mutations: {
    ADD_TASK(state, task) {
      if (!state.tasks.find(t => t.title === task.title)) {
        state.tasks.push(task)
      }
    },

    ADD_TO_SELECTED_TASK(state, task) {
      if (!state.selectedTasks.find(t => t.title === task.title)) {
        state.selectedTasks.push(task)
      } else {
        state.selectedTasks.forEach((t, index) => {
          if (t.id === task. id) {
            state.selectedTasks.splice(index, 1)
          }
        })
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

    DELETE_SELECTED_TASK(state) {
      state.selectedTasks.forEach(task => {
        state.tasks.forEach((t, index) => {
          if (t.id === task. id) {
            state.tasks.splice(index, 1)
          }
        })
      })

      state.selectedTasks = []
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