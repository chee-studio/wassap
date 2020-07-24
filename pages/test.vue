<template>
  <div class="container">
    isMobile: {{$device.isMobile}} <br/>
    isDesktop: {{$device.isDesktop}} <br/>

    {{$device.isDesktop ? 'https://cafe.naver.com/ArticleList.nhn?search.clubid=20564405&search.menuid=137&search.boardtype=L#' : 'https://m.cafe.naver.com/ca-fe/web/cafes/20564405/menus/137'}}

    <AddWineBtn/>
  </div>
</template>

<script>
  import AddWineBtn from "../components/common/AddWineBtn";

  export default {
    components: {AddWineBtn},

  }
</script>
