<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="handleClick(i)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-edit
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
    <dialog-vue-date
      v-if="dialogs.dueDate"
      :task="task"
      @close="dialogs.dueDate = false"
    />
    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
  </div>
</template>

<script>
import DialogDelete from "./Dialogs/DialogDelete.vue";
import DialogEdit from "./Dialogs/DialogEdit.vue";
import DialogVueDate from "./Dialogs/DialogVueDate.vue";
export default {
  components: {
    "dialog-delete": DialogDelete,
    "dialog-edit": DialogEdit,
    "dialog-vue-date": DialogVueDate,
  },
  props: ["task"],
  data() {
    return {
      dialogs: {
        edit: false,
        dueDate: false,
        delete: false,
      },
      items: [
        {
          title: "Edit",
          icon: "mdi-clipboard-edit-outline",
          click() {
            this.dialogs.edit = true;
          },
        },
        {
          title: "Due Date",
          icon: "mdi-clipboard-text-clock-outline",
          click() {
            this.dialogs.dueDate = true;
          },
        },
        {
          title: "Delete",
          icon: "mdi-trash-can-outline",
          click() {
            this.dialogs.delete = true;
            // The conetext of the this Object here is the click() method,
            // so we are dialing down the this vue object with the .call method on the handleClick method
          },
        },
      ],
    };
  },
  methods: {
    handleClick(i) {
      this.items[i].click.call(this); //handleClick method using call to pass the vue this object to the click method
    },
  },
};
</script>

<style>
</style>