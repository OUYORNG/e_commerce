<template>
  <div :class="[bgColor, 'rounded-[10px] w-[137px] h-[177px] flex flex-col justify-center items-center']">
    <img :src="pic" :alt="pic" class="aspect-square" />
    <h2>{{ name }}</h2>
    <p class="text-[10px] text-gray-500">{{ stock + " items" }}</p>
  </div>
</template>

<script>
export default {
  name: 'categories',
  props: {
    name: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    bgColor: {
      type: String,
      required: false,
      default: '',
    },
    pic: {
      type: String,
      required: false,
      default: '/categories/cat7-1.png',
    }
  },
}
</script>