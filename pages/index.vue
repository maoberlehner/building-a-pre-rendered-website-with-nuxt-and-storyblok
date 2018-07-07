<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__hero mb-4 mb-md-5 mx-auto text-center`">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">
        {{ intro }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { GET_LANDING_PAGE } from '../store/action-types';
import { HOME } from '../store/modules/landing-page';

export default {
  name: `Home`,
  computed: {
    ...mapState(`landingPage`, [
      `intro`,
      `title`,
    ]),
  },
  // The `fetch` method is called by
  // Nuxt.js before the component is
  // initialized. This is the right place
  // to fetch the data necessary for the
  // page to render.
  async fetch({ store, route }) {
    await store.dispatch(`landingPage/${GET_LANDING_PAGE}`, HOME);
  },
};
</script>

<style>
.Home__hero {
  max-width: 36em;
}
</style>
