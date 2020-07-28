<template>
  <div class="container">

    <MainBanner/>
    <MainNotice/>
    <KeywordsBox/>
    <RockCurtain/>
    <AddWineBtn/>

  </div>
</template>

<script>
  import KeywordsBox from "../components/body/KeywordsBox";
  import MainBanner from "../components/body/MainBanner";
  import RockCurtain from "../components/common/RockCurtain";
  import AddWineBtn from "../components/common/AddWineBtn";
  import MainNotice from "../components/body/MainNotice";

  export default {
    components: {RockCurtain, KeywordsBox, MainBanner, AddWineBtn, MainNotice},
  }
</script>

