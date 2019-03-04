<template>
  <v-container>
    <v-layout justify-center row>
      <v-flex xs6>
        <v-form ref="workDetailForm">
          <v-toolbar class="toolbar-no-padding" flat color="transparent">
            <v-toolbar-title>info</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="createNews" depressed dark style="margin-right:-48px">create</v-btn>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-text-field v-model="newsDetail.title" label="title" required></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import newsService from "../../../service/inslens/NewsService";

export default {
  data() {
    return {
      newsDetail: {}
    };
  },
  methods: {
    async createNews() {
      await newsService.createNews(this.newsDetail);
      this.$router.push({ path: "/inslens/news" });
    }
  }
};
</script>

<style>
</style>
