<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
    <div class="flex gap-4 overflow-x-auto">
      <div v-for="category in categories" :key="category.name"
        class="flex-none w-32 p-4 bg-white shadow rounded-lg text-center">
        <div class="text-2xl mb-2">
          <img :src="category.icon" alt="" class="w-12 h-12 mx-auto" />
        </div>
        <div class="font-semibold">{{ category.name }}</div>
        <div class="text-gray-500 text-sm">{{ category.items }} items</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>