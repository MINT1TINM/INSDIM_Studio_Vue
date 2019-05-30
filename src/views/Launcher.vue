<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-card dark flat tile ripple :aspect-ratio="1/1" to="/insdim">
          <v-card-title>INSDIM</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card dark flat tile ripple :aspect-ratio="1/1">
          <v-card-title>DIMLAB</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
