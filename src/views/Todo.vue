<template>
  <div class="root">
    <add-task-field />
    <task-list v-if="$store.state.tasks.length" />
    <no-task v-else />
  </div>
</template>

<script>
import AddTaskField from "../components/Todo/AddTaskField.vue";
import TaskList from "@/components/Todo/TaskList.vue";
import NoTask from "../components/Todo/NoTask.vue";

export default {
  name: "Home",

  components: {
    "add-task-field": AddTaskField,
    "task-list": TaskList,
    "no-task": NoTask,
  },
};
</script>


