<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { storeToRefs } from "pinia";

const store = useTodoStore();
const { todos } = storeToRefs(store);

const completed = computed(() => store.todos.filter(todo => todo.completed))

</script>

<template>
  <div class="completed">
    <div v-for="todo in completed" :key="todo.id" class="item">
      <Todo :todo="todo" />
    </div>
  </div>
</template>
