<template>
  <v-layout row wrap fill-height>
    <v-flex xs3>
      <v-list class="clip-content" dense>
        <div v-for="(item,i) in workList" :key="i">
          <v-list-tile>
            <v-list-tile-content style="border-bottom:1px black">
              <v-list-tile-title class="grey--text subheading">{{item.key}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile
            :to="'/inslens/work/'+sub_item._id"
            ripple
            v-for="(sub_item,j) in item.item"
            :key="j"
            active-class="active-tile"
          >
            <v-list-tile-content>
              <v-list-tile-title class="subheading">{{sub_item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-flex>
    <v-flex xs9>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
import workService from "../../../service/inslens/WorkService";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      workList: "work/workList"
    })
  },
  async mounted() {}
};
</script>

<style>
</style>
