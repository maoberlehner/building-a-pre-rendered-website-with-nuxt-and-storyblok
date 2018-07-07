<template>
  <div :class="$options.name">
    <div class="d-flex align-items-center p-3 mb-3 mb-md-5 bg-white border-bottom box-shadow">
      <span class="mr-auto">Fancy Company</span>
      <nav class="ml-auto">
        <nuxt-link
          class="p-2 text-dark"
          to="/"
        >
          Home
        </nuxt-link> |
        <nuxt-link
          class="p-2 text-dark"
          to="/about"
        >
          About
        </nuxt-link>
      </nav>
    </div>
    <nuxt :class="`${$options.name}__main mx-auto`"/>
    <footer class="d-flex align-items-center p-3 bg-white border-top box-shadow">
      &copy; Fancy Company
    </footer>
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
};
</script>

<style>
.LayoutDefault__main {
  padding-right: 1em;
  padding-left: 1em;
  max-width: 52em;
}
</style>
