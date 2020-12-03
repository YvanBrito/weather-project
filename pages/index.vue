<template>
  <div class="container mx-auto p-5">
    <!-- HEADER -->
    <nav class="md:flex flex-row md:justify-between">
      <div class="flex flex-row justify-between">
        <a href="#">Logo</a>
        <p id="hamburguerbtn" class="md:hidden" @click="toggleMenu">menu</p>
      </div>
      <ul :class="{ active: showMenu }" class="hidden md:flex md:flex-row">
        <li class="pr-5"><a href="#">Services</a></li>
        <li class="pr-5"><a href="#">Portifolio</a></li>
        <li class="pr-5"><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <!-- HEADER END -->
    <!-- HERO -->
    <div class="container mx-auto p-20 bg-gray-300">
      <div class="flex justify-center">
        <div class="flex flex-col">
          <div class="self-center">Comece por aqui!!!</div>
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
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style>
.active {
  display: block;
}
</style>
