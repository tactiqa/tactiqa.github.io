<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the project and the technologies used.'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Another project with different technologies and challenges.'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A third project showing a different aspect of my work.'
  }
];
</script>

<template>
  <section id="projects" class="py-12 w-full bg-gray-50">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
          My Work
        </h2>
        <p class="text-sm text-gray-500 max-w-2xl mx-auto">
          A showcase of my recent projects and contributions
        </p>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :title="project.title"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>
