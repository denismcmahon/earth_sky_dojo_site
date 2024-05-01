<template>
    <div>
        <h1>{{ article.title }}</h1>
        <img :src="article.image" alt="Article Image">
        <p>{{ article.content }}</p>
    </div>
</template>

<script>
    export default {
        props: ['article'],
    }
</script>

<style scoped>
</style>