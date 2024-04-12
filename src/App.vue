<template>
<div>
    <the-header></the-header>
    <router-view></router-view>
</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
    components: {
        TheHeader,
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Reddit Mono", monospace;
}

body {
  margin: 0;
}
</style>