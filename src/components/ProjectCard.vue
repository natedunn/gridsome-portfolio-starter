<template>
  <div>
    <Link :href="link">
      <g-image
        :src="coverImage"
        :alt="title"
        class="h-48 w-full object-cover"
      />
      <div class="h-3"></div>
      <span class="text-lg">{{ title }}</span>
    </Link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    coverImage() {
      return this.image
        ? require(`!!assets-loader!@/images/${this.image}`)
        : "https://fakeimg.pl/600x400/282828/eae0d0/?retina=1";
    }
  }
};
</script>

<style>
</style>