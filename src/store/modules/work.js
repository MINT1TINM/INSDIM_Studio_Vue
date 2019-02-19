const state = {
  workList: []
};
const getters = {
  workList: state => {
    return state.workList;
  }
};
const mutations = {
  getWorkList: (state, workList) => {
    state.workList = workList;
  }
};
const actions = {
  async getWorkList(context, workList) {
    context.commit("getWorkList", workList);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
