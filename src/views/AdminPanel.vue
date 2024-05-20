<template>
    <form @submit.prevent="addPost" class="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input type="text" id="title" v-model="newPost.title" required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content:</label>
        <quill-editor
          v-model="newPost.content"
          :options="editorOption"
          ref="quillEditor"
        />
      </div>
      <div class="flex items-center justify-between">
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Post</button>
      </div>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  import { quillEditor } from 'vue3-quill';
  
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        newPost: {
          title: '',
          content: ''
        },
        editorOption: {
          placeholder: 'Write your content here...',
          modules: {
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline']
            ]
          }
        }
      };
    },
    methods: {
      async addPost() {
        console.log('DM ==> this.newPost: ', this.newPost);
        const response = await axios.post('http://localhost:3000/api/posts', this.newPost);
        console.log('Post added: ', response.data);
        // reset the form after submitting
        this.newPost = {
          title: '',
          content: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  