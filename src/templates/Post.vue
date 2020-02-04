<template>
  <Layout>
    <div class="container mx-auto my-16">
      <h1 class="text-4xl font-bold font-mono">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="flex mb-8 text-sm tags">
        <span class="inline-block mr-4">Filed under:</span>
        <Link v-for="tag in $page.post.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</Link>
      </div>
      <div class="mb-8">
        <Link to="/blog" class="font-bold uppercase">Back to Blog</Link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: post(path: $path) {
      title
      cover
      date(format: "MMMM D, Y")
      content
      tags {
        title
        path
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [
        {
          property: "og:image",
          content: this.ogImageUrl
        },
        {
          property: "og:title",
          content: this.pageTitle
        },
        {
          property: "title",
          content: this.pageTitle
        },
      ],
    }
  },
  computed: {
    ogImageUrl () {
      return this.$page.post.cover ? this.$page.post.cover.src : `${this.config.siteUrl}/images/default-cover.png`
    },
    pageTitle() {
      return this.$page.post.title ? this.$page.post.title : null;
    }
  }
}
</script>

<style lang="postcss">
.tags > a:not(:last-of-type) {
  @apply mr-4;
}
</style>
<style src="../css/github-markdown.css" />