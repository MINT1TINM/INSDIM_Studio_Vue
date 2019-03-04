<template>
  <v-container class="clip-content">
    <v-layout justify-center>
      <v-flex xs9>
        <v-form ref="newsDetailForm">
          <v-toolbar class="toolbar-no-padding" flat color="transparent">
            <v-toolbar-title>info</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="updateNews" depressed dark style="margin-right:-48px">save</v-btn>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-switch v-model="newsDetail.visibility" label="visibility"></v-switch>
          <v-text-field v-model="newsDetail.title" label="title" required></v-text-field>
          <v-text-field v-model="newsDetail.author" label="author" required></v-text-field>
          <quill-editor
            v-model="newsDetail.content"
            ref="myQuillEditor"
            :options="editorOption"
          ></quill-editor>

          <v-toolbar class="toolbar-no-padding pt-4" flat color="transparent">
            <v-toolbar-title>media</v-toolbar-title>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-text-field v-model="newsDetail.videolink" label="video link"></v-text-field>

          <v-toolbar class="toolbar-no-padding pt-4" flat color="transparent">
            <v-toolbar-title>fold</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon style="margin-right:-48px" @click="uploadPicDialog=true;type='fold'">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-container grid-list-xs>
            <v-layout>
              <v-flex xs4>
                <v-card dark flat tile>
                  <v-img aspect-ratio="1" contain :src="newsDetail.titlePic.url"></v-img>
                  <v-card-actions>
                    <v-btn icon @click="deletePic(newsDetail.titlePic);type='fold'">
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <!-- <v-toolbar class="toolbar-no-padding pt-4" flat color="transparent">
            <v-toolbar-title>pic</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon style="margin-right:-48px" @click="uploadPicDialog=true">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs4 v-for="(item,i) in newsDetail.pic" :key="i">
                <v-card dark flat tile>
                  <v-img aspect-ratio="1.5" :src="item.url"></v-img>
                  <v-card-actions>
                    <v-btn icon @click="deletePic(item)">
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container> -->
          <v-toolbar class="toolbar-no-padding pt-4" flat color="transparent">
            <v-toolbar-title>fuck</v-toolbar-title>
          </v-toolbar>
          <v-divider class="mb-3"></v-divider>
          <v-container>
            <v-btn block color="error" @click="deleteWork" depressed>delete</v-btn>
          </v-container>
        </v-form>

        <v-dialog v-model="uploadPicDialog" persistent max-width="400px">
          <v-card>
            <v-card-title>
              <span class="dim-headline">upload pic</span>
            </v-card-title>
            <v-container>
              <dim-upload v-model="file" type="jpg"></dim-upload>
              <small class="text-xs-center">support formats like .jpg</small>
            </v-container>
            <v-card-actions>
              <v-layout align-center justify-center>
                <v-btn round flat @click="uploadPicDialog = false">no</v-btn>
                <v-btn round color="primary" flat @click="uploadPic">yes</v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import newsService from "../../../service/inslens/NewsService";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      newsDetail: {},
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote"]
          ]
        }
      },
      file: null,
      uploadPicDialog: false,
      type: null
    };
  },
  methods: {
    async getNewsDetail() {
      const rsp = await newsService.getNewsDetail(this.$route.params.id);
      this.newsDetail = rsp.data.newsList[0];

      if (
        this.newsDetail.visibility == "true" ||
        this.newsDetail.visibility == "1"
      ) {
        this.newsDetail.visibility = true;
      } else {
        this.newsDetail.visibility = false;
      }
    },
    async updateNews() {
      const rsp = await newsService.updateNews(this.newsDetail);
    },
    async uploadPic() {
      let fileForm = new FormData();
      // console.log(this.type);
      fileForm.append("name", this.file.name);
      fileForm.append("file", this.file);
      fileForm.append("_id", this.$route.params.id);
      fileForm.append("type", this.type);
      const rsp = await newsService.uploadPic(fileForm);
      this.type = null;
      this.uploadPicDialog = false;
      this.getNewsDetail();
    },
    async deleteWork() {
      try {
        await this.$confirm("fuck?");
        await newsService.deleteNews(this.$route.params.id);
        this.$emit("updateworklist");
        this.$router.push({ path: "/inslens/news" });
      } catch (err) {
        err;
      }
    },
    async deletePic(item) {
      try {
        await this.$confirm("fuck?");
        await newsService.deletePic(item, this.$route.params.id, this.type);
        await this.getNewsDetail();
        this.$router.push({ path: "/inslens/news" });
      } catch (err) {
        err;
      }
    }
  },
  mounted() {
    this.getNewsDetail();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getNewsDetail();
  }
};
</script>

<style>
</style>
