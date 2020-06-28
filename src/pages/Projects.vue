<template>
  <Layout>
    <div class="py-12">
      <Heading el="h1">projects</Heading>
      <section
        class="my-8 flex flex-col md:flex-row md:flex-wrap justify-between projects"
      >
        <ProjectCard
          title="Proper"
          link="https://useproper.dev"
          image="cardcover-proper.jpg"
        />
        <ProjectCard title="Weird Web" link="https://weirdweb.dev" />
        <ProjectCard title="Rad" link="https://radlist.io" />
        <ProjectCard title="Personal site" link="https://natedunn.net" />
      </section>
    </div>
  </Layout>
</template>

<script>
import Link from "@/components/Link";
import ProjectCard from "@/components/ProjectCard";
import Heading from "@/components/Heading";
export default {
  components: {
    Link,
    ProjectCard,
    Heading
  },
  metaInfo: {
    title: "Projects"
  }
};
</script>

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