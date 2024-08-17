<script lang="ts" setup xmlns:hover="http://www.w3.org/1999/xhtml">
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
  }[]
}>()
</script>

<template>
  <ul grid="~ cols-1 sm:cols-2 lg:cols-3 gap-4">
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>
    <li v-for="project in list" :key="project.text" container-link w-full flex flex-col items-center rd-2>
      <!-- Image Section -->
      <div w-full h-full flex items-center justify-center bg-gray-100 rd-2 mb-4>
        <img v-if="project.image" :src="project.image" alt="project image">
      </div>
      <!-- Icon and Title Section -->
      <a flex items-center justify-start w-full target="_blank" :href="project.href" :aria-label="project.text">
        <div ml-2 mr-4 pt-2>
          <i text-3xl inline-block :class="project.icon || 'i-carbon-unknown'" />
        </div>
        <div font-normal lh-tight>
          <div class="text-4 hover:text-main">{{ project.text }}</div>
          <div opacity-50 text-sm>{{ project.description }}</div>
        </div>
      </a>
    </li>
  </ul>
</template>
