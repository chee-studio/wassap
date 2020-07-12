<template>
  <v-carousel style="margin-top: 10px"
              :height=height
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src='item.src'
    />
  </v-carousel>
</template>

<script>
  export default {
    computed: {
      items() {
        return this.$device.isDesktop ? [{src: 'https://wassap.co/resources/main-banner/wassap_banner.png'}] : [{src: 'https://wassap.co/resources/main-banner/wassap_mobile.jpg'}]
      },
      height() {
        return this.$device.isDesktop ? '350px' : '170px'
      }
    }
  }
</script>
