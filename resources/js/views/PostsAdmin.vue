<template>
  <div class="my-5">
    <h3 class="white--text">Posts</h3>
    <v-card dark>
      <v-card-actions>
				<v-btn color="primary">
          Add New Post
				</v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search"
          single-line
          hide-details>
        </v-text-field>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PostsAdmin',
  data: () => ({
    search: ''
  })
}
</script>

<style>

</style>