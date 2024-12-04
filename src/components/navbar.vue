<template>
    <nav class="flex flex-col p-4">
        <div class="flex justify-between p-4 items-center">
            <img src="/Logo.png" alt="e-commerce logo">
            <div class="flex border-2 border-black w-fit p-1 rounded-md">
                <select name="cars" id="cars" class="bg-inherit">
                    <option value="all">All categories</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <div class="flex gap-2">
                    <span class="border-r-2 border-black"></span>
                    <input type="text" placeholder="Search Items" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            <div>
                <div class="flex justify-center space-x-6 text-gray-700">
                    <!-- Account -->
                    <div class="flex  items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5.121 17.804A7.975 7.975 0 0012 20a7.975 7.975 0 006.879-2.196M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="text-sm mt-1">Account</span>
                    </div>
                    <!-- Compare -->
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 16h8M8 12h8m-7-8h2a2 2 0 012 2v2m0-4h2a2 2 0 012 2v6m-6 4h2m-6 0h2a2 2 0 012 2v2m0-4h2a2 2 0 012 2v2" />
                        </svg>
                        <span class="text-sm mt-1">Compare</span>
                    </div>
                    <!-- Wishlist -->
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.975a4.5 4.5 0 016.364 6.364L12 21.793l-7.682-9.111a4.5 4.5 0 010-6.364z" />
                        </svg>
                        <span class="text-sm mt-1">Wishlist</span>
                    </div>
                    <!-- Cart -->
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2m0 0a1 1 0 00.894.553h11.812a1 1 0 00.894-1.447l-1.6-4A1 1 0 0015.812 0H6.6a1 1 0 00-.894.553L4.4 2H3zM16 10a4 4 0 11-8 0 4 4 0 018 0zm-2 7H8a1 1 0 00-1 1v1h10v-1a1 1 0 00-1-1z" />
                        </svg>
                        <span class="text-sm mt-1">Cart</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="bg-white shadow-sm">
            <div class="container mx-auto flex items-center justify-between py-4 px-6">
                <!-- Left Section -->
                <div class="flex items-center space-x-4">
                    <!-- Browse All Categories -->
                    <button class="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        Browse All Categories
                    </button>

                    <!-- Menu Links -->
                    <div class="flex items-center space-x-6 text-gray-700">
                        <a href="#" class="hover:text-green-500">Hot Deals</a>
                        <a href="#" class="hover:text-green-500">Home</a>
                        <a href="#" class="hover:text-green-500">Food</a>
                        <a href="#" class="hover:text-green-500">Vegetables</a>
                        <a href="#" class="hover:text-green-500">Drink</a>
                        <a href="#" class="hover:text-green-500">Cookies</a>
                        <a href="#" class="hover:text-green-500">Meat & Seafood</a>
                        <a href="#" class="hover:text-green-500">Bakery</a>
                    </div>
                </div>

                <!-- Right Section -->
                <div class="flex items-center space-x-4 text-gray-700">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-1" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8h2a2 2 0 012 2v4a2 2 0 01-2 2h-2m-4 0h-4m6-10H9m4 0H7m6 4h2m0 0H7m2 4h6" />
                        </svg>
                        <span>099 777 888</span>
                    </div>
                    <span class="text-sm">24/7 Support Center</span>
                </div>
            </div>
        </div>
    </nav>
</template>