<template>
    <form @submit.prevent="addPost" class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input type="text" id="title" v-model="newPost.title" required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content:</label>
        <textarea id="content" v-model="newPost.content" required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div class="mb-4">
        <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
        <input type="text" id="image" v-model="newPost.image" required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="flex items-center justify-between">
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Post</button>
      </div>
    </form>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                newPost: {
                    title: '',
                    content: '',
                    image: ''
                }
            };
        },
        methods: {
            async addPost() {
                const response = await axios.post('http://localhost:3000/api/posts', this.newPost);
                console.log('Post added: ', response.data);
                // reset the form after submitting
                this.newPost = {
                    title: '',
                    content: '',
                    image: ''
                }
            }
        }
    }
</script>

<style scoped>
</style>