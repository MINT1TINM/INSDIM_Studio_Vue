const state = {
  newsList: []
};
const getters = {
  newsList: state => {
    return state.newsList;
  }
};
const mutations = {
  getNewsList: (state, newsList) => {
    state.newsList = newsList;
  }
};
const actions = {
  async getNewsList(context, newsList) {
    context.commit("getNewsList", newsList);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
