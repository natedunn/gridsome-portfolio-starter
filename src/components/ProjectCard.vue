<template>
  <div>
    <Link :href="link">
      <img src="https://fakeimg.pl/600x400/282828/eae0d0/?retina=1" alt="Faker" />
      <span class="inline-block mt-2 text-lg">{{ title }}</span>
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
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>