<template>
    <div class="flex justify-between items-center">
        <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
        <div class="flex items-center">
            <div v-for="item in group" :key="item.id" class="p-4 rounded-lg ">
                <a class="text-center">{{ item }}</a>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 my-8">
        <div v-for="promo in promotions" :key="promo.id" class="p-4 rounded-lg flex w-full h-[30vh]"
            :style="{ backgroundColor: promo.color, backgroundImage: `url('http://localhost:3000/${promo.image}')` }">
            <!-- Title and Button -->
            <a :href="promo.url">
                <h3 class="text-lg font-semibold mb-2" :style="{ color: promo.buttonColor }">
                    {{ promo.title }}
                </h3>
                <button @click="shopNow(promo.url)" class="px-4 py-2 rounded-lg text-white"
                    :style="{ backgroundColor: promo.buttonColor }">
                    Shop Now
                </button>
            </a>
            <!-- Promotion Image -->
            <!-- <img :src="`http://localhost:3000/${promo.image}`" alt="Promotion"
                    class="w-[100%] h-[100%] object-cover rounded-lg mb-4" /> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        promotions: Array,
        group: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },
    methods: {
        shopNow(url) {
            window.location.href = url;
        },
    },
};
</script>