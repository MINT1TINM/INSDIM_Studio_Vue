<template>
  <v-app>
    <v-app-bar app clipped-left flat color="transparent">
      <v-toolbar-title>INSDIM Studio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn icon v-on="on">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item v-for="(item, i) in userMenu" :key="i" :to="item.route">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
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
