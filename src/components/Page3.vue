<template>
    <div class="flex gap-4">
        <div class="left">
            <a href="/page3/section3">Section1</a>
        </div>
        <div class="right">
            Welcome to page 3
            <RouterView/>
        </div>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
    name: 'Page1',
}
</script>