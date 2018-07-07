module.exports = {
  css: [
    `./node_modules/bootstrap/dist/css/bootstrap.css`,
  ],
  head: {
    title: `Building a Pre-Rendered Website With Nuxt.js and Storyblok`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width,initial-scale=1` },
    ],
  },
  router: {
    linkExactActiveClass: `is-active`,
  },
};
