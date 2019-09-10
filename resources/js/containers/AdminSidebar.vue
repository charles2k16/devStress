<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout column fill-height tag="v-list" class="white--text caption font-weight-bold mb-0 pb-0 side">

    <!-- Logo -->
    <v-list-tile avatar style="margin-left: -20px; margin-bottom: 10px">
      <v-list-tile-avatar><img src="/img/favicon.png"></v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title class="title font-weight-thin white--text">Dev-Stress</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <!-- Main links -->
    <v-list-tile v-for="link in main" :key="link.title" router :to="link.route" active-class="active">
      <v-list-tile-action>
        <v-icon color="white darken-2" small>{{link.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="font-weight-light">{{link.title}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <!-- Profile & Logout -->
    <v-flex class="v-list__tile--buy" >
      <v-list-tile router to="/system/profile" avatar active-class="active">
        <v-list-tile-action>
          <v-list-tile-avatar size="16"><img src="/img/avatar.png"></v-list-tile-avatar>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-light">Your Profile</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile class="v-list-item">
        <v-list-tile-action>
          <v-icon color="white darken-2" small>fas fa-sign-out-alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold">
            <a href="#" style="text-decoration: none; color: white">Logout</a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  name: 'AdminSideBar',
  data () {
    return {
      main: [
        { icon: 'mdi-view-dashboard', title: 'Dashboard', route: '/dashboard'},
        { icon: 'people', title: 'Leads', route: '/leads'},
        { icon: 'fas fa-layer-group', title: 'Applications', route: '/applications'},
        { icon: 'receipt', title: 'Credit Reports', route: '/credit_reports' },
        { icon: 'shopping_cart', title: 'Products', route: '/products'}
      ],
    }
  },
  methods: {
    
  }
}
</script>

<style>
  #drawer div[role=listitem] {
    padding-left: 10px;
    padding-right: 10px;
    background-color: #1E2227;
  }
  .active {
    background: #7f47f3;
    border-radius: 3px;
  }
  .v-list__tile--buy {
    width: 100%;
    position: absolute;
    bottom: 5px;
  }

</style>

