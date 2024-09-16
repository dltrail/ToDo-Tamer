<script setup>
import { computed } from 'vue';
import { useTodoStore } from '~/stores/todoStore';
import { storeToRefs } from 'pinia';

const store = useTodoStore();
const { todos } = storeToRefs(store);

const completedTodos = computed(() =>
  todos.value.filter(todo => !todo.completed)
);
</script>

<template>
  <ListContainer>
     <ul v-if="todos.length > 0">
      <li v-for="todo in completedTodos" :key="todo.id" ><TodoItem 
      
      :todo="todo" /></li>
     </ul>
    <div v-else>
      <p class="msg">Create your first todo </p>
    </div>
  </ListContainer>
</template>

<style scoped>
ul {
  @apply xl:mx-20;
}
li {
  @apply mb-2;
}
</style>
