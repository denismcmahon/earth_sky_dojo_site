import { createRouter, createWebHistory } from 'vue-router';
import PostList from '@/views/PostList.vue';
import PostView from '@/views/PostView.vue';
import AdminPanel from '@/views/AdminPanel.vue';

const routes = [
  { path: '/', component: PostList },
  { path: '/article/:id', component: PostView, props: true },
  { path: '/admin', component: AdminPanel }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
