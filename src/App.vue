<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{name: 'home'}">
          <v-list-tile-action>
            <i class="fas fa-clipboard-list"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>홈</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="{name: 'list'}">
          <v-list-tile-action>
            <i class="fas fa-monument"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Firestore 게시판</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vue 연습</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017 / 12 / 10</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>