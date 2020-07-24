<template>
  <div v-if="false">
    <v-card-text style="position: fixed; top: 90%;">
      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          color="pink"
          dark
          absolute
          top
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        hidden: true,
      }
    },

    mounted() {
      let that = this
      setTimeout(function () {
        that.hidden = false
      }, 200)
    }
  }
</script>
