<template>
  <v-app>
    <v-navigation-drawer app permanent fixed clipped>
      <v-list class="pt-0" dense>
        <v-list-item
          active-class="active-tile"
          v-for="(item,i) in menu"
          :key="i"
          :to="item.route"
          ripple
        >
          <v-subheader class="pt-4 mb-1" v-if="item.heading">{{ item.heading }}</v-subheader>
          <v-list-item-content v-else>
            <v-list-item-title class="subtitle-1 ml-3">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view />
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
          title: "+new",
          route: "/insdim/newnews"
        },
        {
          title: "list",
          route: "/insdim/news"
        },
        {
          heading: "work"
        },
        {
          title: "+new",
          route: "/insdim/newwork"
        },
        {
          title: "list",
          route: "/insdim/work"
        }
      ]
    };
  }
};
</script>

<style>
</style>
