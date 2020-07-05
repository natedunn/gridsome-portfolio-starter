<template>
  <div class="flex border-b border-primary pt-8 pb-12">
    <div class="md:w-1/2 pr-4">
      <g-image
        v-if="images"
        v-for="(value, key) in images"
        :src="getImage(value)"
        :key="key + value"
        :class="key > 0 ? `mt-6` : null"
      />
    </div>
    <div class="md:w-1/2 pl-4">
      <div class="sticky" style="top: 2rem;">
        <div class="flex justify-between items-center">
          <h3 class="font-mono font-bold text-3xl">
            {{ title }}
          </h3>
          <span
            v-if="version"
            class="inline-block bg-primary-invert rounded-full text-primary-invert px-2 py-1 text-xs font-mono font-bold"
          >
            {{ version }}
          </span>
        </div>
        <div class="mt-4">
          <slot name="desc"></slot>
        </div>
        <ul class="mt-6">
          <li v-for="link in links" class="inline-block mr-3">
            <Link :url="link.url">
              {{ link.text }}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    links: {
      type: Array,
      required: true
    },
    version: {
      type: String,
      default: null
    }
  },
  computed: {
    projectImages() {}
  },
  methods: {
    getImage(src) {
      return require(`!!assets-loader!@/images/${src}`);
    }
  }
};
</script>

<style>
</style>