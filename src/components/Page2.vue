<template>
    <div class="flex gap-4">
        <div class="left">
            <a href="/page2/section2">Section1</a>
        </div>
        <div class="right">
            Welcome to page 2
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