<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <Card
      v-for="(city, index) in cities"
      :key="index"
      :name="city.name"
      :description="city.description"
      @click.native="cityChosen(city)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from './Card.vue'

export default {
  components: { Card },
  computed: {
    ...mapState({
      cities: (state) => state.cityList,
    }),
  },
  methods: {
    cityChosen(city) {
      this.$store.commit('chosen', city)
    },
  },
}
</script>

<style></style>
