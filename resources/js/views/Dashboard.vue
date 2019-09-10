<template>
  <div class="my-5 mx-5">
    <h3 class="white--text">Posts</h3>
    <v-card dark id="card" class="px-3">
      <v-card-actions>
				<v-btn color="primary">
          Add New Post
				</v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"
          single-line
          hide-details>
        </v-text-field>
        <br><br>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    search: ''
  })
}
</script>

<style>
  #card {
    background-color: #283142;
  }
</style>