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
    // badge: `${badgeCount.value}`
  },
  {
    label: "Completed",
    icon: "i-heroicons-check",

    to: "/completed",
  },
];
</script>

<template>

  <UHorizontalNavigation :links="links" class="justify-center"/>

</template>
