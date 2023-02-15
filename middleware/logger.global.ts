export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from, "Router to -> from");
});
