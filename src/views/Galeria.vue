<template>
  <v-carousel hide-delimiters>
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
            src: 'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/09/03/08/04/photographer-920128_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/04/09/23/10/girl-1319114_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg',
          },
        ],
      }
    },
  }
</script>