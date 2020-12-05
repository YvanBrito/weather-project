<template>
  <div class="container mx-auto p-5">
    <!-- HERO -->
    <div class="container mx-auto p-20 bg-gray-300">
      <div class="flex justify-center">
        <div class="flex flex-col">
          <div class="self-center">Digite o nome de uma cidade</div>
          <SearchInput />
        </div>
      </div>
    </div>
    <!-- HERO END -->
    <GridResults />
  </div>
</template>

<script>
import GridResults from '~/components/GridResults.vue'
import SearchInput from '~/components/SearchInput.vue'
export default {
  components: { SearchInput, GridResults },
}
</script>

<style>
.active {
  display: block;
}
</style>
