<template>
    <div class="left">
        <h1>Menu/Section</h1>
    </div>
    <div class="right">
        Welcome to page 
    </div>
    <RouterView/>
    
</template>

<script>
import { RouterView } from 'vue-router';

export default {
    name: 'Page',
}
</script>