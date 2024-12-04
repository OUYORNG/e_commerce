<template>
    <div class="bg-yellow-100 py-12 z-20 w-full h-[65vh] flex items-center"
        style="background-image: url('/figure.png');">
        <div class="container z-9 mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
            <!-- Text Content -->
            <div class="max-w-lg ">
                <h1 class="text-6xl font-bold text-gray-800">Don’t miss amazing grocery deals</h1>
                <p class="mt-4 text-gray-600 text-xl">Sign up for the daily newsletter</p>
                <!-- Subscription Form -->
                <form class="mt-6 flex">
                    <input type="email" placeholder="Your email address"
                        class="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <button type="submit"
                        class="px-6 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</template>