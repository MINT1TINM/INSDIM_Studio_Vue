<template>
  <v-container>
    <v-layout justify-center row>
      <v-flex xs6>
        <v-form ref="workDetailForm">
          <v-toolbar class="toolbar-no-padding" flat color="transparent">
            <v-toolbar-title>info</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="createWork" depressed dark style="margin-right:-48px">create</v-btn>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-text-field v-model="workDetail.title" label="title" required></v-text-field>
          <v-text-field v-model="workDetail.year" label="year" required></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import workService from "../../../service/inslens/WorkService";

export default {
  data() {
    return {
      workDetail: {}
    };
  },
  methods: {
    async createWork() {
      await workService.createWork(this.workDetail);
      this.$router.push({ path: "/inslens/work" });
    }
  }
};
</script>

<style>
</style>
