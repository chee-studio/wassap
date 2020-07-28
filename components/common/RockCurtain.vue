<template>
  <div id="screen" v-show="turnOn">
    <v-alert
      type="info"
      icon="mdi-android-debug-bridge"
      dense
      tile
      color="#2c4679"
      border="left"
      style="margin-bottom: 10px; margin-top: 10px;"
    >
      <div style="font-size: 0.9rem;">
        현재 WASSAP 은 점검 중이에요.
      </div>
      <div style="font-size: 0.7rem;color: lightblue;">
        얼른 작업 끝내고 오픈할게요! (12:00 ~ 14:20 까지 <span style="color: white">2시간 10분 예상</span>)
      </div>
    </v-alert>
    <ExtraLinks
      style="background-color: #f5f5f5"
    />
  </div>
</template>

<script>
  import ExtraLinks from "./ExtraLinks";

  export default {
    components: {ExtraLinks},
    data() {
      return {
        turnOn: false
      }
    }
  }
</script>

<style scoped>
  #screen {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 1;
  }
</style>
