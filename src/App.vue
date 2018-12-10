<template>
  <v-app>
    <v-navigation-drawer app>네비드로어
      <v-btn @click="$router.push('/')">링크-홈</v-btn>
      <v-btn @click="$router.push('/list')">링크-리스트</v-btn>
      <v-btn @click="$router.push('/add')">링크-추가</v-btn>
      <v-btn @click="$router.push({ name: 'list'})">링크-리스트-파라미터이용</v-btn>
      <router-link :to="{name: 'list'}">링크-리스트-라우터링크이용</router-link>
      <!-- <v-list-tile router :to="{name: '/'}"> -->
    </v-navigation-drawer>
    <v-toolbar app>툴바</v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>푸터</v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    linkTest () {
      $router.push({ name: 'show', params: { id: 1 }})
    }
  }
}
</script>
