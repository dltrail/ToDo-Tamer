<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { storeToRefs } from "pinia";

const store = useTodoStore();
const { todos } = storeToRefs(store);

const badgeCount = computed(() => todos.value.length);

const links = [
  {
    label: "todos",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Completed",
    icon: "i-heroicons-check",

    to: "/completed",
  },
];
</script>

<template>
  <nav class="border-b border-gray-200 dark:border-gray-800">
    <NuxtLink to="/"> 
        <UBadge :label="badgeCount" />
        Todos
         </NuxtLink>
    <NuxtLink to="/completed">
      <UIcon name="i-heroicons-check" class="w-5 h-5" />
      completed
    </NuxtLink>
  </nav>
</template>
