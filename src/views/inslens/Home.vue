<template>
  <v-app>
    <v-navigation-drawer app permanent fixed clipped>
      <v-list class="pt-0" dense>
        <v-list-tile
          active-class="active-tile"
          v-for="(item,i) in menu"
          :key="i"
          :to="item.route"
          ripple
        >
          <v-subheader class="pt-4 mb-1" v-if="item.heading">{{ item.heading }}</v-subheader>
          <v-list-tile-content v-else>
            <v-list-tile-title class="subheading ml-3">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          heading: "news"
        },
        {
          title: "+new"
        },
        {
          title: "list"
        },
        {
          heading: "work"
        },
        {
          title: "+new",
          route: "/inslens/newwork"
        },
        {
          title: "list",
          route: "/inslens/work"
        }
      ]
    };
  }
};
</script>

<style>
</style>
