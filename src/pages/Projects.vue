<template>
  <Layout>
    <div class="py-12">
      <div
        class="border-b border-primary pb-2 flex justify-between items-center"
      >
        <Heading el="h1">projects</Heading>
      </div>
      <section>
        <Project
          v-for="project in $page.allProjects.edges.slice().reverse()"
          :title="project.node.name"
          :images="project.node.images"
          :links="project.node.url"
          :key="project.node.name"
        >
          <template v-slot:desc>
            <p
              v-for="(desc, index) in project.node.description"
              :class="index > 0 ? 'mt-4' : null"
              v-html="desc"
            ></p>
          </template>
        </Project>
      </section>
    </div>
  </Layout>
</template>

<script>
import Heading from "@/components/Heading";
import Project from "@/components/Project";
export default {
  components: {
    Heading,
    Project
  },
  metaInfo: {
    title: "Projects"
  }
};
</script>

<page-query>
  query {
    allProjects {
      totalCount
      edges {
        node {
          name
          images
          description
          url {
            text
            url
          }
        }
      }
    }
  }
</page-query>

<style lang="postcss">
.projects > div {
  margin-bottom: theme("spacing.6");
}
@screen md {
  .projects > div {
    width: calc(50% - theme("spacing.4"));
  }
}
</style>