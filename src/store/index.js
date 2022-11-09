import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "adam Jahr" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "comunity",
    ],
    // toDos: [
    //   { id: 1, text: "...", done: true },
    //   { id: 2, text: "...", done: false },
    //   { id: 3, text: "...", done: true },
    //   { id: 4, text: "...", done: false },
    // ],
    events: [
      { id: 1, text: "...", organizer: "..." },
      { id: 2, text: "...", organizer: "..." },
      { id: 3, text: "...", organizer: "..." },
      { id: 4, text: "...", organizer: "..." },
    ],
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    // doneToDos: (state) => {
    //   return state.toDos.filter((toDo) => toDo.done);
    // },
    // activeToDosCount: (state) => {
    //   return state.toDos.filter((toDo) => !toDo.done).length;
    // },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
