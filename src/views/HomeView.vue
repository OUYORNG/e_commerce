<script>
import axios from 'axios';
import categories from '@/components/categories.vue';
import Product from '@/components/Product.vue';
import Promotion from '@/components/Promotion.vue';
import ShowCase from '@/components/ShowCase.vue';
import Navbar from '@/components/navbar.vue';

export default {
    data() {
        return {
            promotions: [],
            products: [],
            currentCategory: 'All',
            currentGroupName: 'Group B'
        }
    },
    methods: {
        fetchCategories() {
            axios.get('http://localhost:3000/api/groups').then(res => {
                this.currentCategory = res.data;
                console.log(this.currentCategory);
            })
        },
        fetchFeatures() {
            axios.get('http://localhost:3000/api/features').then(res => {
                this.currentCategory = res.data;
            })
        },
        fetchProducts() {
            axios.get('http://localhost:3000/api/products').then(res => {
                this.products = res.data;
                console.log(this.products);
            })
        },
        fetchPromotions() {
            axios.get('http://localhost:3000/api/promotions').then(res => {
                this.promotions = res.data;
                console.log(this.promotions);
            })
        }
    },
    mounted() {
        this.fetchCategories()
        this.fetchPromotions()
        this.fetchProducts()
    },
    components: {
        categories,
        Product,
        Promotion,
        ShowCase,
        Navbar
    }
}
</script>

<template>
    <Navbar />
    <ShowCase />
    <div class="bg-gray-100 p-6">
        <Promotion :group="currentCategory" title="Featured Categories" :promotions="promotions" />
        <Product :group="currentCategory" title="Popular Products" :products="products" />
    </div>
</template>
