<template>
  <v-layout row wrap fill-height>
    <v-flex xs3>
      <v-list class="clip-content" dense>
        <div v-for="(item,i) in newsList" :key="i">
          <v-list-tile :to="'/inslens/news/'+item._id" ripple active-class="active-tile">
            <v-list-tile-content>
              <v-list-tile-title class="subheading">{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-flex>
    <v-flex xs9>
      <router-view @updatenewslist="getNewsList"></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
import newsService from "../../../service/inslens/NewsService";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    getNewsList() {
      newsService.getNewsList();
    }
  },
  computed: {
    ...mapGetters({
      newsList: "news/newsList"
    })
  },
  async mounted() {
    this.getNewsList();
  }
};
</script>

<style>
</style>
