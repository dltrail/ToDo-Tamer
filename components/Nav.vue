<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { storeToRefs } from "pinia";
import { computed } from 'vue';

const store = useTodoStore();
const { todos } = storeToRefs(store);

const badgeCount = computed(() => todos.value.length);

const links = [
  {
    label: "My Todos",
    icon: "i-heroicons-home",
    to: "/",
    ariaLabel: "View all todos", 
    //badge: badgeCount.value > 0 ? badgeCount.value.toString() : '', // Display badge count if greater than 0
  },
  {
    label: "Completed",
    icon: "i-heroicons-check",
    to: "/completed",
    ariaLabel: "View completed todos",
  },
];
</script>

<template>
  <UHorizontalNavigation :links="links" class="horizontal-navigation"/>
</template>

<style scoped>
.horizontal-navigation {
  display: flex;
  justify-content: center;
}
</style>
