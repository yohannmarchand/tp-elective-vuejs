export default {
  namespaced: true,

  state: () => ({
    authUser: null,
    users: [],
  }),

  getters: {
    GetAuthUser(state) {
      return state.authUser
    },

    GetUsers(state) {
      return state.users
    }
  },

  mutations: {
    SET_AUTH_USER(state, { user }) {
      state.authUser = user
    },

    ADD_USER(state, { user }) {
      if (state.users.find(u => u.id === user.id)) {
        state.users.push(user)
      }
    }
  },
}