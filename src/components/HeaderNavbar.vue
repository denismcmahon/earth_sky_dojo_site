<template>
    <nav class="bg-black">
      <ul class="flex justify-end items-center h-16">
        <li class="mx-4 order-2"><router-link to="/admin" class="text-white">Admin Panel</router-link></li>
        <li class="mx-4 order-1"><router-link to="/" class="text-white">Home</router-link></li>
      </ul>
    </nav>
</template>
  
<script>
    export default {
        name: 'HeaderNavbar'
    }
</script>

<style scoped>
</style>