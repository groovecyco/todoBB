<template>
  <v-list class="pt-0" flat>
    <task
      class="itemlist"
      v-for="task in $store.getters.tasksFiltered"
      :key="task.id"
      :task="task"
    >
    </task>
  </v-list>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: {
    task: Task,
  },
};
</script>

<style>
</style>