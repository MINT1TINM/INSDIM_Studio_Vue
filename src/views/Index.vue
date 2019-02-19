<template>
  <v-app>
    <v-toolbar app clipped-left flat color="transparent">
      <v-toolbar-title>DIMLAB Studio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile v-for="(item, i) in userMenu" :key="i" :to="item.route">
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userMenu: [
        {
          text: "exit",
          route: "/"
        }
      ]
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      userInfo: "user/userInfo"
    })
  },
  mounted() {}
};
</script>

<style>
</style>
