<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
      <div class="flex items-center">
        <div v-for="item in group" :key="item.id" class="p-4 rounded-lg ">
          <a class="text-center">{{ item }}</a>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.id" class="p-4 rounded-lg flex gap-4">
        <div class="border rounded-lg p-4 w-64  hover:shadow-lg transition-shadow duration-300">
          <!-- Discount Badge -->
          <div class="absolute -mt-4 -ml-4">
            <div class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {{ product.promotionAsPercentage }}%
            </div>
          </div>

          <!-- Product Image -->
          <img src="" alt="Product Image" class="w-full h-40 object-cover rounded-md" />

          <!-- Product Information -->
          <div class="mt-4">
            <div class="text-sm text-gray-500">Hodo Foods</div>
            <div class="text-sm font-semibold mt-1">
              {{ product.name }}
            </div>
            <!-- Rating -->
            <div class="flex items-center mt-2">
              <!-- Stars -->
              <div class="flex items-center text-yellow-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.329-.314-.158-.888.283-.95l4.898-.696L8.465.792c.197-.39.73-.39.927 0l2.185 4.379 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.329-.314-.158-.888.283-.95l4.898-.696L8.465.792c.197-.39.73-.39.927 0l2.185 4.379 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.329-.314-.158-.888.283-.95l4.898-.696L8.465.792c.197-.39.73-.39.927 0l2.185 4.379 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.329-.314-.158-.888.283-.95l4.898-.696L8.465.792c.197-.39.73-.39.927 0l2.185 4.379 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <!-- Add more stars or adjust based on rating -->
                <span class="ml-2 text-gray-500">({{ product.rating }})</span>
              </div>
            </div>

            <!-- Weight -->
            <div class="text-sm text-gray-500 mt-2">{{ product.size }}</div>

            <!-- Price and Quantity -->
            <div class="flex items-center justify-between mt-4">
              <!-- Price -->
              <div>
                <div class="text-green-600 font-bold text-lg">{{ product.price }}$</div>
                <div class="text-gray-400 line-through text-sm">$2.80</div>
              </div>
              <!-- Quantity -->
              <div class="flex items-center border border-green-500 rounded-lg">
                <button class="px-2 text-green-600 hover:bg-green-100">-</button>
                <input type="text" value="1" class="w-8 text-center text-gray-700 outline-none" />
                <button class="px-2 text-green-600 hover:bg-green-100">+</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    title: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    },
    group: {
      type: Array,
      required: true
    }
  }
};
</script>