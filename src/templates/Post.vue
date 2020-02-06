<template>
  <Layout>
    <div class="container mx-auto my-16">
      <h1 class="text-4xl font-bold font-mono">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ dateFormat }}</div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="flex mb-8 text-sm tags">
        <span class="inline-block mr-4">Filed under:</span>
        <Link v-for="tag in $page.post.tags" :key="tag.id" :to="tag.path">{{
          tag.title
        }}</Link>
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
      date
      content
      tags {
        title
        path
      }
    }
  }
</page-query>

<script>
import moment from "moment";
import slugify from "@sindresorhus/slugify";
export default {
  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description(this.$page.post)
        },
        // Open Graph
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        {
          property: "og:description",
          content: this.description(this.$page.post)
        },
        { property: "og:url", content: this.postUrl },
        {
          property: "article:published_time",
          content: moment(this.$page.post.date).format("YYYY-MM-DD")
        },
        { property: "og:image", content: this.ogImageUrl },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:description",
          content: this.description(this.$page.post)
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  methods: {
    description(post, length, clamp) {
      if (post.description) {
        return post.description;
      }
      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    ogImageUrl() {
      return this.$page.post.cover ? this.$page.post.cover.src : null;
    },
    pageTitle() {
      return this.$page.post.title ? this.$page.post.title : null;
    },
    dateFormat() {
      return moment(this.$page.date).format("MMMM D, Y");
    }
  }
};
</script>

<style lang="postcss">
.tags > a:not(:last-of-type) {
  @apply mr-4;
}
</style>
<style src="../css/github-markdown.css" />