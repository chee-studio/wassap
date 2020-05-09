<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="searchResult"
      class="elevation-1"
      :rows-per-page-items=[25,50]
    >
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
          <span v-on="on">
            {{ props.header.text }}
          </span>
          </template>
          <span>
          {{ props.header.text }}
        </span>
        </v-tooltip>
      </template>
      <template v-slot:items="props">
        <td >{{ props.item.index }}</td>
        <td >{{ props.item.nameKo }}</td>
        <td >{{ props.item.vintage }}</td>
        <td >{{ props.item.price }}</td>
        <td >{{ props.item.purchaseDate }}</td>
        <td >{{ props.item.purchasePlace }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import ServerConfig from '../server.config.js'

  export default {
    props: ['keyword'],
    data: () => ({
      searchResult: [],
      headers: [
        {text: 'no', value:'no', width:'1%', },
        {text: '와인 명', value: 'nameKo', width:'1%'},
        {text: '빈티지', value: 'vintage', width:'1%'},
        {text: '가격', value: 'price', width:'1%'},
        {text: '구매일', value: 'purchaseDate', width:'1%'},
        {text: '구매처', value: 'purchasePlace', width:'1%'}
      ],
    }),
    // mounted() {
    //   fetch(`${ServerConfig.url}/wines/더 복서`)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.searchResult = res
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // },
    watch: {
      keyword() {
        fetch(`${ServerConfig.url}/wines/${this.keyword}`)
        .then(res => res.json())
        .then(res => {
          this.searchResult = res
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style>
  table.v-table tbody td:first-child, table.v-table tbody td:not(:first-child), table.v-table tbody th:first-child, table.v-table tbody th:not(:first-child), table.v-table thead td:first-child, table.v-table thead td:not(:first-child), table.v-table thead th:first-child, table.v-table thead th:not(:first-child) {
    padding: 0 3px
  }
</style>
