<template>
  <div class="container mx-auto p-5">
    <nav class="md:flex flex-row md:justify-between">
      <div class="flex flex-row justify-between">
        <a href="/">Logo</a>
        <p id="hamburguerbtn" class="md:hidden" @click="toggleMenu">menu</p>
      </div>
      <ul :class="{ active: showMenu }" class="hidden md:flex md:flex-row">
        <li class="pr-5"><a href="#">Services</a></li>
        <li class="pr-5"><a href="#">Portifolio</a></li>
        <li class="pr-5"><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
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

<style></style>
