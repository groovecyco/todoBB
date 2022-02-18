import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  search: null,
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
        dueDate: "2021-11-12",
      },
      {
        id: 2,
        title: "It's late",
        done: false,
        dueDate: "2022-06-12",
      },
      { id: 3, title: "Get up", done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: `Snack`,
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTaskTitle) {
      let newTasks = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      state.tasks.push(newTasks);
    },
    editTask(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    closeSnackbar(state) {
      state.snackbar.show = false;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit(
        "showSnackbar",
        `You added the task with the name: ${newTaskTitle}`
      );
    },
    editTask({ commit }, payload) {
      commit("editTask", payload);
      commit("showSnackbar", `You changed the task to: ${payload.title}`);
    },
    updateTaskDueDate({ commit }, payload) {
      commit("updateTaskDueDate", payload);
      commit("showSnackbar", `You changed the dueDate`);
    },

    deleteTask({ commit }, { id, title }) {
      commit("deleteTask", id);
      commit("showSnackbar", `You deleted the task with the name: ${title}`);
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  modules: {},
});
