<template>
  <div class="my-5">
    
    <v-card dark id="card" class="px-3 mx-5">

      <v-card-actions>
				<v-btn dark>
          Add New Post
				</v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"
          single-line
          hide-details>
        </v-text-field>
      </v-card-actions>
      <br><br>
      <v-data-table
        light
        :headers="headers"
        :items="tableData"
        :search="search"
        :loading="tableLoading">
        <template v-slot:items="props">
          <td>{{ props.item.title}}</td>
          <td style="width: 350px;">{{ props.item.sub_content}}</td>
          <td sty>{{ props.item.category}}</td>
          <td>{{ props.item.views }}</td>
          <td style="width:300px; text-align:left;">
            <v-btn color="primary">
              edit
            </v-btn>
            <v-btn color="danger">
              delete
            </v-btn>
          </td>
        </template>

        <template v-slot:no-results>
          <v-alert :value="true" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import postService from '../api/posts'

export default {
  name: 'PostsAdmin',
  data: () => ({
    search: '',
    tableData: [],
    tableLoading: false,
    headers: [
      { text: 'Title', align: 'left', value: 'title'},
      { text: 'Sub title', align: 'left', value: 'sub_content'},
      { text: 'Category', value: 'category' },
      { text: 'Views', value: 'views' },
      { text: 'Actions', value: 'actions' }
    ],
    rowsPerPage:  [20,50,100],
  }),
  created () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      this.tableLoading = true
      postService.getPosts()
        .then((response) => {
          this.loadTable(response)
        }).catch((errors) => {console.log(errors)})
    },
    loadTable (data) {
      console.log(data.posts)
      let table = data.posts.map(function (el) {
        el.category = el.category.name
        return el
      })
      this.tableData = table
      this.tableLoading = false
    }
  }
}
</script>

<style>
  #card {
    background-color: #283142;
  }
</style>