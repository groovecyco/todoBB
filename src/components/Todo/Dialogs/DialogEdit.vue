<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit task </v-card-title>
      <v-card-text
        >Edit the title of this task
        <v-text-field v-model="taskTitle" @keyup.enter="saveTask" />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="taskTitleInvalid" color="red" text @click="saveTask">
          Confirm
        </v-btn>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  computed: {
    taskTitleInvalid() {
      if (!this.taskTitle || this.taskTitle === this.task.title) {
        return true;
      }
    },
  },
  methods: {
    sDeleteAction(id, title) {
      this.$store.dispatch("deleteTask", { id, title });
    },

    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch("editTask", payload);
        this.$emit("close");
      }
    },
  },
  data() {
    return {
      taskTitle: null,
    };
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style>
</style>