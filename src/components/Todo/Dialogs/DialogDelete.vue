<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete Task ? </v-card-title>
      <v-card-text
        >You want to delte the task, then click Yes, otherwise No</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="sDeleteAction(task.id, task.title)">
          Yes
        </v-btn>
        <v-btn text @click="$emit('close')"> No </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    sDeleteAction(id, title) {
      this.$store.dispatch("deleteTask", { id, title });
    },
  },
};
</script>

<style>
</style>