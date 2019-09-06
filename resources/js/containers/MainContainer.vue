<template>
  <v-app id="app">
    <v-container grid-list-xl>

      <v-app-bar clipped-right dark flat short id="themeBackground">
        <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-thin caption">Talk is cheap. Show me the code</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout wrap>
            <v-flex xs3>
              <Sidebar />
            </v-flex>
            <v-flex xs9>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

    </v-container>
  </v-app>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  components: {Sidebar},

  data: () => ({
    qoutesData: [
      'Talk is cheap. Show me the code', 
      'alex'
    ]
  }),
  methods: {

  }
}
</script>

<style>
  #app {
    background-color: #1E2227;
    font-family: 'Montserrat', sans-serif;
  }
  .textTitle {
    font-size: 33px;
    font-weight: 900;
    line-height: 40px;
    font-family: 'Raleway', sans-serif;
  }
  .subTitle {
    font-size: 18px;
    font-weight: bold;
  }
</style>
