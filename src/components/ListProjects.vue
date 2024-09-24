<script lang="ts" setup xmlns:hover="http://www.w3.org/1999/xhtml">
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
    image?: string
  }[]
}>()
</script>

<!-- <template> -->
<!--  <ul grid="~ cols-1 sm:cols-2 lg:cols-2 gap-4"> -->
<!--    <template v-if="!list || list.length === 0"> -->
<!--      <div py10 opacity-50 text-lg> -->
<!--        nothing here yet. -->
<!--      </div> -->
<!--    </template> -->
<!--    <li v-for="project in list" :key="project.text" container-link w-full flex flex-col items-center rd-2> -->
<!--      &lt;!&ndash; Icon and Title Section &ndash;&gt; -->
<!--      <a flex items-center justify-start w-full target="_blank" :href="project.href" :aria-label="project.text"> -->
<!--        &lt;!&ndash; Image Section &ndash;&gt; -->
<!--        <div w-full h-full flex items-center justify-center bg-gray-100 rd-2 mb-4> -->
<!--          <img v-if="project.image" w-full h-full object-cover :src="project.image" alt="project image"> -->
<!--        </div> -->
<!--        <div ml-2 mr-4 pt-2> -->
<!--          <i text-3xl inline-block :class="project.icon || 'i-carbon-unknown'" /> -->
<!--        </div> -->
<!--        <div font-normal lh-tight> -->
<!--          <div class="text-4 hover:text-main">{{ project.text }}</div> -->
<!--          <div opacity-50 text-sm>{{ project.description }}</div> -->
<!--        </div> -->
<!--      </a> -->
<!--    </li> -->
<!--  </ul> -->
<!-- </template> -->

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>
    <li
      v-for="project in list" :key="project.text"
      class="w-full flex flex-col items-center rd-2 break-inside transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <!-- Image Section -->
      <a class="flex flex-col w-full target:_blank" :href="project.href" :aria-label="project.text">
        <div class="w-full h-48 bg-gray-100 rd-2 mb-4 flex items-center justify-center">
          <img v-if="project.image" class="w-full h-full object-cover" :src="project.image" alt="project image">
        </div>
        <!-- Content Section: Icon and Text -->
        <div class="flex items-center w-full">
          <!-- Icon Section (Left) -->
          <div class="text-3xl mr-4">
            <i :class="project.icon || 'i-carbon-unknown'" class="transition-transform duration-300 hover:scale-110" />
          </div>
          <!-- Text Section (Right) -->
          <div class="flex flex-col justify-center">
            <div class="text-4 hover:text-main">{{ project.text }}</div>
            <div class="opacity-50 text-sm">{{ project.description }}</div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>
