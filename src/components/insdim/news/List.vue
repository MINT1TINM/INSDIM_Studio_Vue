<template>
  <v-layout>
    <v-flex xs3>
      <v-list class="clip-content" dense>
        <div v-for="(item,i) in newsList" :key="i">
          <v-list-item :to="'/insdim/news/'+item._id" ripple active-class="active-item">
            <v-list-item-content>
              <v-list-item-title class="subheading">{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-flex>
    <v-flex xs9>
      <router-view @updatenewslist="getNewsList"></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
import newsService from "../../../service/insdim/NewsService";
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
