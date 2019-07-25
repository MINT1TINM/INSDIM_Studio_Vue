<template>
  <v-app class="no-scrollbar">
    <v-content>
      <v-container fluid fill-height style="padding:0 !important">
        <v-scroll-y-transition>
          <v-layout justify-center align-center>
            <v-flex xs4 d-flex>
              <v-container style="padding-right:100px !important">
                <v-card-text>
                  <p class="text-md-left headline font-weight-bold mb-4 pt-3">INSDIM KEY</p>
                  <v-form ref="loginForm">
                    <v-text-field
                      v-model="username"
                      prepend-icon="person"
                      name="login"
                      label="username"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="password"
                      type="password"
                      @keyup.enter="login"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions class="pb-5">
                  <v-btn text color="primary" depressed @click="login" rounded>login</v-btn>
                </v-card-actions>
              </v-container>
            </v-flex>
          </v-layout>
        </v-scroll-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import authService from "../service/AuthService";
import { mapGetters } from "vuex";
import workService from "../service/insdim/WorkService";
import newsService from "../service/insdim/NewsService";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      if (this.$refs.loginForm.validate()) {
        const rsp = await authService.login(this.username, this.password);
        if ((await rsp.msg) == "success") {
          workService.getWorkList();
          newsService.getNewsList();
          this.$router.push({ path: "/launcher" });
        }
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>


