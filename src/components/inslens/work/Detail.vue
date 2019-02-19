<template>
  <v-container class="clip-content">
    <v-layout justify-center>
      <v-flex xs9>
        <v-form ref="workDetailForm">
          <v-toolbar class="toolbar-no-padding" flat color="transparent">
            <v-toolbar-title>info</v-toolbar-title>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>

          <v-text-field v-model="workDetail.title" label="title" required></v-text-field>
          <v-text-field v-model="workDetail.designer" label="designer" required></v-text-field>
          <v-text-field v-model="workDetail.year" label="year" required></v-text-field>
          <v-text-field v-model="workDetail.client" label="client" required></v-text-field>
          <quill-editor
            v-model="workDetail.description"
            ref="myQuillEditor"
            :options="editorOption"
          ></quill-editor>

          <v-toolbar class="toolbar-no-padding pt-4" flat color="transparent">
            <v-toolbar-title>media</v-toolbar-title>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-text-field v-model="workDetail.videolink" label="video link"></v-text-field>

          <v-toolbar class="toolbar-no-padding pt-4" flat color="transparent">
            <v-toolbar-title>fold</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon style="margin-right:-48px">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-container grid-list-xs>
            <v-layout>
              <v-flex xs4>
                <v-card dark flat tile>
                  <v-img aspect-ratio="1" contain :src="workDetail.titlePic"></v-img>
                  <v-card-actions>
                    <v-btn icon>
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <v-toolbar class="toolbar-no-padding pt-4" flat color="transparent">
            <v-toolbar-title>pic</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon style="margin-right:-48px">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs4 v-for="(item,i) in workDetail.pic" :key="i">
                <v-card dark flat tile>
                  <v-img aspect-ratio="1.5" :src="item.url"></v-img>
                  <v-card-actions>
                    <v-btn icon>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import workService from "../../../service/inslens/WorkService";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      workDetail: {},
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote"]
          ]
        }
      }
    };
  },
  methods: {
    async getWorkDetail() {
      const rsp = await workService.getWorkDetail(this.$route.params.id);
      this.workDetail = rsp.data.workList[0];
    }
  },
  mounted() {
    this.getWorkDetail();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getWorkDetail();
  }
};
</script>

<style>
</style>
