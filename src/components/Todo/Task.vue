<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
      ><!--Object Syntax checking truthiness of task.done -->
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text v-if="task.dueDate">
            <v-icon small>mdi-clipboard-text-clock-outline </v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <!-- <v-btn @click.stop="storeDeleteAction(task.id, task.title)" icon> -->
          <task-menu :task="task" />
        </v-list-item-action>
      </template>
    </v-list-item>
  </div>
</template>

<script>
import { format } from "date-fns";
import TaskMenu from "./TaskMenu.vue";

export default {
  props: ["task"],

  components: {
    "task-menu": TaskMenu,
  },
  filters: {
    niceDate(value) {
      //console.log(value);
      return format(new Date(value), "d.MM.yy");
    },
  },
  methods: {
    deleteDialog() {
      if (this.dialogs.delete === false) {
        this.dialogs.delete = true;
      }
    },
    storeDeleteAction(id, title) {
      this.$store.dispatch("deleteTask", { id, title });
    },
  },
};
</script>

<style>
</style>