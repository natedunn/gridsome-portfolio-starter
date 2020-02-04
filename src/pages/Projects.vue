<template>
  <Layout>
    <div class="container mx-auto py-16">
      <h1 class="text-4xl font-bold font-mono">Current projects</h1>
      <section class="my-8 flex flex-row flex-wrap justify-between projects">
        <ProjectCard title="Proper" link="https://useproper.dev" />
        <ProjectCard title="Weird Web" link="https://weirdweb.dev" />
        <ProjectCard title="Rad" link="https://radlist.io" />
        <ProjectCard title="Personal site" link="https://natedunn.net" />
      </section>
    </div>
  </Layout>
</template>

<script>
import Link from '@/components/Link'
import ProjectCard from '@/components/ProjectCard'
export default {
  components: {
    Link,
    ProjectCard
  }
}
</script>

<style lang="postcss">
.projects > div {
  @apply mb-6;
  width: calc(50% - theme("spacing.4"));
}
</style>