<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
<template>
  <Header />

  <main class="main">
    <div class="leftLayout">
      <NuxtImg
        class="tamer-image desktop"
        src="/task-tamer.svg"
        alt="Task Tamer Graphic"
        loading="lazy"sd
      />
    </div>
    <div class="rightLayout">
      <TodoForm :class="route.path === '/'? '' : 'hide'" />
      <Nav />
      <slot />
      <NuxtImg
        class="tamer-image mobile"
        src="/task-tamer.svg"
        alt="Task Tamer Graphic"
        loading="lazy"
      />
    </div>
  
  </main>
  <Footer />
</template>

<style scoped>

.hide {
  @apply hidden
}
.main {
  @apply min-h-[calc(96vh-var(--header-height))] flex flex-col-reverse lg:flex-row mt-[var(--header-height)] lg:overflow-hidden justify-end;
}

.leftLayout {
  @apply lg:w-1/2 sm:w-screen;
}

.rightLayout {
  @apply lg:w-1/2 sm:w-screen text-center relative;
}

.rightLayoutHeader {
  @apply fixed w-screen text-center translate-x-[-50%] left-1/2 bg-white z-50;
}

.tamer-image {
  &.desktop {
    @apply hidden md:block md:relative md:bottom-auto
  }
  &.mobile {
    @apply relative bottom-0 md:relative md:hidden md:bottom-auto
  }
}
</style>
