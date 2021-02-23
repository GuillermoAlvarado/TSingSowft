<template>
  <v-carousel :show-arrows="false"
      cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.adsttc.com/media/images/566a/203f/e58e/ceff/8600/002b/large_jpg/04.jpg?1449795625',
          },
          {
            src: 'https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png',
          },
          {
            src: 'https://www.flowww.net/hubfs/Q3_AGOSTO%202018/BLOG_ES/como-escoger-los-muebles-de-tu-salon-de-unas.png',
          },
          {
            src: 'https://www.dondeir.com/wp-content/uploads/2019/01/cortes-de-cabello-para-hombre-2019.jpg',
          },
        ],
      }
    },
  }
</script>