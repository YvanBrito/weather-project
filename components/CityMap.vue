<template>
  <div
    ref="canvas"
    class="flex justify-center text-center shadow-md px-5 py-5 m-2 rounded"
  >
    <GmapMap
      :center="location"
      :zoom="7"
      map-type-id="terrain"
      style="width: 20rem; height: 20rem"
    >
      <GmapMarker
        :position="location"
        :clickable="true"
        :draggable="true"
        @click="center = location"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
