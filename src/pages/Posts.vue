<template>
  <Layout>
    <div class="max-w-4xl mx-auto py-12">
      <div
        class="border-b border-primary pb-2 flex justify-between items-center"
      >
        <Heading el="h1">posts</Heading>
        <Link url="/rss.xml">RSS</Link>
      </div>
      <section class="mt-6">
        <div v-for="post in $page.posts.edges" :key="post.id" class="post">
          <div
            class="flex flex-col md:flex-row-reverse md:justify-between md:items-center mb-8 md:mb-0"
          >
            <div class="text-secondary">
              <span>{{ post.node.date }}</span>
            </div>
            <h2 class="text-2xl font-mono">
              <Link class="inline-block py-2" :url="post.node.path">{{
                post.node.title
              }}</Link>
            </h2>
          </div>
        </div>
      </section>

      <div class="mt-6 pt-6 border-t border-primary"></div>

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/posts"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
  query Posts($page: Int) {
    posts: allPost(sortBy: "date", order: DESC, perPage: 12, page: $page)
      @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          date(format: "MMMM D, Y")
          summary
          path
        }
      }
    }
  }
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";
import Heading from "@/components/Heading";
export default {
  metaInfo: {
    title: "Posts"
  },
  components: {
    PaginationPosts,
    Heading
  }
};
</script>
