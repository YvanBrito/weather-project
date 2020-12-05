<template>
  <div class="flex-1 text-center bg-blue-200 shadow-md px-5 py-5 m-2 rounded">
    <template v-if="loading">
      <LoadingIcon />
    </template>
    <template v-else>
      <p class="font-sans text-2xl" v-html="cityLabel"></p>
      <div class="flex justify-center items-center">
        <img :src="icon" />
        <p class="font-sans text-7xl">{{ temp | convertTemp | round }}º</p>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <p class="font-sans text-base">
          Máxima:
          {{ weatherInfo.main.temp_max | convertTemp | round }}º
        </p>
        <p class="font-sans text-base">
          Mínima:
          {{ weatherInfo.main.temp_min | convertTemp | round }}º
        </p>
        <p class="font-sans text-base">
          Sensação térmica:
          {{ weatherInfo.main.feels_like | convertTemp | round }}º
        </p>
        <p class="font-sans text-base">
          Humidade:
          {{ weatherInfo.main.humidity }}%
        </p>
        <p class="font-sans text-base">
          Velocidade do vento:
          {{ weatherInfo.wind.speed }}m/s
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import LoadingIcon from './LoadingIcon.vue'
export default {
  components: {
    LoadingIcon,
  },
  filters: {
    round(value) {
      if (!value) return 0
      return value.toFixed(1)
    },
    convertTemp(value) {
      return value - 273.15
    },
  },
  props: {
    cityLabel: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  async fetch() {
    this.loading = true
    this.weatherInfo = await this.$axios.$get(
      `/apiweather/weather?lat=${this.lat}&lon=${this.lng}&appid=2da5f338c8203a12b0857528d1fb138d`
    )
    this.loading = false
  },
  data() {
    return {
      weatherInfo: {},
      loading: false,
    }
  },
  computed: {
    temp() {
      return this.weatherInfo?.main?.temp || 0
    },
    icon() {
      return this.weatherInfo?.weather
        ? `https://openweathermap.org/img/wn/${this.weatherInfo?.weather[0]?.icon}@2x.png`
        : ''
    },
  },
}
</script>

<style></style>
