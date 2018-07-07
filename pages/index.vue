<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__hero mb-4 mb-md-5 mx-auto text-center`">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">
        {{ intro }}
      </p>
    </div>

    <div :class="`${$options.name}__media-blocks mb-5`">
      <app-media-block
        v-for="mediaBlock in mediaBlocks"
        :key="mediaBlock.id"
        v-bind="mediaBlock"
      />
    </div>

    <ul :class="`${$options.name}__teasers mb-5`">
      <li
        v-for="teaser in teasers"
        :key="teaser.id"
      >
        <app-teaser v-bind="teaser"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { GET_LANDING_PAGE } from '../store/action-types';
import { HOME } from '../store/modules/landing-page';

import AppMediaBlock from '../components/AppMediaBlock.vue';
import AppTeaser from '../components/AppTeaser.vue';

export default {
  name: `Home`,
  components: {
    AppMediaBlock,
    AppTeaser,
  },
  computed: {
    ...mapState(`landingPage`, [
      `intro`,
      `mediaBlocks`,
      `teasers`,
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

.Home__media-blocks > :not(:last-child) {
  margin-bottom: 4em;
}

.Home__teasers {
  display: flex;
  margin-top: -1em;
  margin-left: -1em;
  padding-left: 0;
  flex-wrap: wrap;
  list-style-type: none;
}

.Home__teasers > * {
  padding-top: 1em;
  padding-left: 1em;
  flex-basis: 16em;
  flex-grow: 9999;
}
</style>
