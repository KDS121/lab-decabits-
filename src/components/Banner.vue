<template>
     <v-carousel class="banner"
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      style=" position: absolute;
              max-width: 95%;
              height: 427px;
              left: 40px;
              top: 110px;
              background: #555555;
              border-radius: 8px;">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
      </v-carousel>
</template>
<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
}
</script>
<style >
.banner{
  top: 120px;
  left: 1px;
  border-radius: 8px;
}
</style>