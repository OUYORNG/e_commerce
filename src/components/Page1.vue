<template>
    <div class="flex gap-4">
        <div class="left">
            <a href="/page1/section1">Section1</a>
        </div>
        <div class="right">
            Welcome to page 1
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