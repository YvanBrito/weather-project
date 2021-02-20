<template>
  <div v-if="loading">
    <LoadingIcon />
  </div>
  <div v-else>
    <div class="container mx-auto p-5">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <CityWeather
          :city-label="cityLabel"
          :lat="location.lat"
          :lng="location.lng"
        />
        <CityMap :location="location" />
      </div>
      <p class="font-sans text-2xl">Imagens de {{ cityDetails.result.name }}</p>
      <PhotoGallery :photos="cityPhotos" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CityWeather from '~/components/CityWeather.vue'
import LoadingIcon from '~/components/LoadingIcon.vue'
import PhotoGallery from '~/components/PhotoGallery.vue'
export default {
  components: {
    PhotoGallery,
    CityMap: () => import('~/components/CityMap.vue'),
    CityWeather,
    LoadingIcon,
  },
  async fetch() {
    this.loading = true
    try {
      this.cityDetails = await this.$axios.$get(
        `/googleplacesdetailsapi/json?place_id=${this.cityChosen.placeId}&key=`
      )
      this.cityDetails.result.photos.forEach((photo) => {
        const photoReference = `/googleplacesphotosapi/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=`
        this.cityPhotos.push(photoReference)
      })
      this.location = this.cityDetails.result.geometry.location
      this.cityLabel = this.cityDetails.result.adr_address
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  data() {
    return {
      loading: false,
      location: {
        lat: 0,
        lng: 0,
        name: '',
      },
      cityDetails: {},
      cityPhotos: [],
      cityLabel: '',
    }
  },
  computed: {
    ...mapState({
      cityChosen: (state) => state.city,
    }),
  },
}
</script>

<style></style>
