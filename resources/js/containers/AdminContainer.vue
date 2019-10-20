<template>
  <v-app id="appAdmin">
    <v-navigation-drawer app width="250" fixed permanent 
      :mini-variant.sync="mini" id="navDrawer" dark>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in links" :key="item.title" link router :to="item.route" active-class="active">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="primary">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app id="navBar" dark>
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
        <v-layout style="margin-top: 25px; width:100px;">
          <!-- <v-text-field v-model="label" rounded solo clearable 
            label="Search" height="30px;">
          </v-text-field> -->
        </v-layout>
        <v-spacer></v-spacer>
        <v-icon color="primary">mdi-bell-ring</v-icon>
        <v-icon>mdi-account-arrow-right-outline</v-icon>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>

export default {
  data: () => ({
    mini: false,
    qoutesData: [
      'Talk is cheap. Show me the code', 
      'alex'
    ],
    links: [
      { icon: 'mdi-view-dashboard', title: 'Dashboard', route: '/dashboard'},
      { icon: 'mdi-file-document-box', title: 'Posts', route: '/admin/posts'},
      { icon: 'mdi-file-document-box-multiple', title: 'Categories', route: '/admin/categories'},
      { icon: 'mdi-account-group', title: 'Users', route: '/credit_reports' },
    ],
  }),
  methods: {

  }
}
</script>

<style>
  #navDrawer, #navBar {
    background-color:#283142
  }
  #appAdmin {
    background-color: #1B2530;
  }
</style>
