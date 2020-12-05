<template>
  <NuxtLink to="/city">
    <div class="flex-1 text-center bg-gray-400 px-5 py-5 m-2 rounded">
      <div class="items-center">
        <div class="mt-4 lg:mt-0">
          <div class="uppercase tracking-wide text-lg font-bold">
            {{ name }}
          </div>
          <div
            class="block mt-1 text-sm leading-tight font-semibold text-gray-900"
          >
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
