<script setup lang="ts">
import Navbar from '@/components/navbar.vue';
</script>

<template>
    <Navbar />
    <!-- Product Details Page -->
    <div class="container mx-auto p-6">
        <!-- Breadcrumb -->
        <div class="text-sm text-gray-600 mb-4">
            <a href="#" class="text-green-500 hover:underline">Home</a>
            <span class="mx-2">/</span>
            <a href="#" class="hover:underline">Vegetables & Tubers</a>
            <span class="mx-2">/</span>
            <span class="font-medium text-gray-800">Seeds of Change Organic</span>
        </div>

        <!-- Product Section -->
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Product Image -->
            <div class="flex-1">
                <div class="border rounded-md p-4">
                    <img src="https://via.placeholder.com/500" alt="Product" class="w-full h-auto object-cover" />
                </div>
                <!-- Thumbnail Carousel -->
                <div class="flex items-center mt-4 space-x-4">
                    <button class="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                        &lt;
                    </button>
                    <div class="flex space-x-4">
                        <img src="https://via.placeholder.com/50" alt="Thumbnail" class="w-12 h-12 border rounded-md" />
                        <img src="https://via.placeholder.com/50" alt="Thumbnail" class="w-12 h-12 border rounded-md" />
                        <img src="https://via.placeholder.com/50" alt="Thumbnail" class="w-12 h-12 border rounded-md" />
                        <img src="https://via.placeholder.com/50" alt="Thumbnail" class="w-12 h-12 border rounded-md" />
                    </div>
                    <button class="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                        &gt;
                    </button>
                </div>
            </div>

            <!-- Product Details -->
            <div class="flex-1">
                <h1 class="text-2xl font-bold text-gray-800 mb-2">Seeds of Change Organic Quinoa, Brown</h1>
                <div class="flex items-center mb-4">
                    <span class="text-yellow-500 text-sm mr-2">★★★★☆</span>
                    <span class="text-gray-600 text-sm">(4.0)</span>
                </div>
                <div class="flex items-center mb-4">
                    <span class="text-3xl font-bold text-green-500">$38</span>
                    <span class="ml-4 text-gray-400 line-through">$42</span>
                </div>
                <p class="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti
                    reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi?
                </p>

                <!-- Quantity and Buttons -->
                <div class="flex items-center space-x-4 mb-6">
                    <div class="flex items-center border rounded-md">
                        <button class="px-3 py-2 text-gray-600 hover:bg-gray-100">-</button>
                        <input type="text" value="1"
                            class="w-12 text-center border-l border-r border-gray-300 focus:outline-none" />
                        <button class="px-3 py-2 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                    <button class="flex items-center bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h18M3 8h18M3 13h18M3 18h18" />
                        </svg>
                        Add To Cart
                    </button>
                    <button class="p-3 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
                        ♡
                    </button>
                    <button class="p-3 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
                        ⟳
                    </button>
                </div>

                <!-- Vendor and SKU -->
                <div class="text-sm text-gray-600">
                    <p><strong>Vendor:</strong> NestMart</p>
                    <p><strong>SKU:</strong> FWM15VKT</p>
                </div>
            </div>
        </div>

        <!-- Description Section -->
        <div class="mt-12">
            <div class="border-b">
                <ul class="flex space-x-8">
                    <li class="border-b-2 border-green-500 pb-2 text-green-500 font-medium">Description</li>
                    <li class="text-gray-600 hover:text-green-500">Additional Info</li>
                    <li class="text-gray-600 hover:text-green-500">Reviews (3)</li>
                </ul>
            </div>
            <div class="mt-6">
                <p class="text-gray-600">
                    Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes
                    off far quetzal goodness...
                </p>
            </div>
        </div>
    </div>

</template>