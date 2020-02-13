// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Link from '@/components/Link.vue';
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
require("typeface-jetbrains-mono");

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Link', Link)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'Nate,Dunn,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'description',
    content: 'Nate Dunn (@natedunn)'
  })

  head.meta.push({
    name: 'author',
    content: 'Nate Dunn'
  })

  head.link.push({
    rel: 'dns-prefetch',
    href: '//fonts.googleapis.com',
  })

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com/',
    crossorigin: "use-credentials"
  })
}


