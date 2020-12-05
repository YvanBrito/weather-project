<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <img v-for="(imageUrl, index) in photos" :key="index" :src="imageUrl" />
  </div>
</template>

<script>
export default {
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
