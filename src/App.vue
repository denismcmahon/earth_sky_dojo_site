<template>
  <HeaderNavbar /> 
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import router from './router';
import HeaderNavbar from './components/HeaderNavbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderNavbar
  },
  setup() {
    return { router };
  }
});
</script>
