<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vuetify Todo </v-list-item-title>
          <v-list-item-subtitle> Best Todo Ever </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark src="../public/dreamy.jpg" prominent>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-container class="pa-0"
        ><v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row
          ><v-app-bar-title class="pl">Vuetify Todo</v-app-bar-title>
        </v-row></v-container
      >
    </v-app-bar>

    <v-main>
      <router-view />
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Share/Snackbars.vue";
import Search from "@/components/Tools/Search.vue";

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-information-variant", to: "/about" },
    ],
  }),
  components: {
    snackbar: Snackbar,
    search: Search,
  },
  methods: {
    searchInput() {
      console.log("inpuzt");
    },
  },
};
</script>
<style lang="sass">
div.v-toolbar__content div.container
  max-width: none
div.v-toolbar__title.v-app-bar-title div.v-app-bar-title__content
  width: 300px
</style>
