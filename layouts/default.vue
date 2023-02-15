<script setup>
const user = useUser();
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a v-else href="#" @click.prevent="user.isLoggedIn = false">Log out</a>
    <NuxtLink to="/swr">SWR</NuxtLink>
    <NuxtLink to="/spa">SPA</NuxtLink>
    <NuxtLink to="/static">Static</NuxtLink>
    <NuxtLink to="/ssr">SSR</NuxtLink>
  </nav>
  <slot></slot>
</template>
