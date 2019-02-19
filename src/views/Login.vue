<template>
  <v-app id="inspire" class="no-scrollbar">
    <v-content>
      <v-container fluid fill-height style="padding:0 !important">
        <v-scroll-y-transition>
          <v-layout justify-center align-center>
            <v-flex xs4 d-flex>
              <v-container style="padding-right:100px !important">
                <v-card-text>
                  <p class="text-md-left headline font-weight-bold mb-4 pt-3">INSLENS KEY</p>
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
                  <v-btn outline color="primary" depressed @click="login" round>login</v-btn>
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
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      this.$loading.show(true);
      if (this.$refs.loginForm.validate()) {
        const rsp = await authService.login(this.username, this.password);
        if (rsp.msg == "success") {
        }
        this.$loading.show(false);
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>


