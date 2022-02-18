<template>
  <v-text-field
    v-model="newTaskTitle"
    @keyup.enter="addTask"
    outlined
    class="pa-3"
    label="Add Task"
    hide-details
    clearable
  >
    <template v-slot:append>
      <v-icon color="primary" @click="addTask" :disabled="!newTaskTitle"
        >mdi-note-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if (!this.newTaskTitleInvalid) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>

<style>
</style>