<template>
    <div>
        <h1>Article List</h1>
        <ul>
            <li v-for="article in articles" :key="article.id">
                {{ article.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                articles: []
            };
        },
        mounted() {
            // fetch the articles from the backend
        }
    }
</script>