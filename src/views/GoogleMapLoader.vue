<template>
  <div style="width:100%;height: 100%;">
    <div class="google-map" ref="googleMap" style="width:100%;height:100%;"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>

import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  name:'GoogleMapLoader',
  props: {
    apiKey: String,
  },

  data() {
    return {
        mapConfig: {
        center: { lat:19.356319864954102 , lng:-99.16202688924024 }, 
        zoom: 18,
      },
      google: null,
      map: null
    }
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.mapConfig
      )
    }
  }
}
</script>