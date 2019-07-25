<template>
  <v-layout>
    <v-flex xs3>
      <v-list class="clip-content" dense>
        <div v-for="(item,i) in workList" :key="i">
          <v-list-item>
            <v-list-item-content style="border-bottom:1px black">
              <v-list-item-title class="grey--text subheading">{{item.key}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            :to="'/insdim/work/'+sub_item._id"
            ripple
            v-for="(sub_item,j) in item.item"
            :key="j"
            active-class="active-item"
          >
            <v-list-item-content>
              <v-list-item-title class="subheading">{{sub_item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-flex>
    <v-flex xs9>
      <router-view @updateworklist="getWorkList"></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
import workService from "../../../service/insdim/WorkService";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    getWorkList() {
      workService.getWorkList();
    }
  },
  computed: {
    ...mapGetters({
      workList: "work/workList"
    })
  },
  async mounted() {
    workService.getWorkList();
  }
};
</script>

<style>
</style>
