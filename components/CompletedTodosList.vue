<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { storeToRefs } from "pinia";

const store = useTodoStore();
const { todos } = storeToRefs(store);

const completed = computed(() => store.todos.filter((todo) => todo.completed));
</script>

<template>
  <ListContainer v-if="completed.length > 0">
    <ul>
      <li v-for="todo in completed" > 
        <TodoItem :key="todo.id" :todo="todo"/>
      </li>
    </ul>
  </ListContainer>
  <EmptyList v-else bodyText="You haven't completed any todos yet!"/>
</template>

<style scoped>
ul {
  @apply xl:mx-20;
}
li {
  @apply mb-2;
}
</style>
