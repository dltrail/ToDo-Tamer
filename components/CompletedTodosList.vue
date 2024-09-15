<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { storeToRefs } from "pinia";

const store = useTodoStore();
const { todos } = storeToRefs(store);

const completed = computed(() => store.todos.filter(todo => todo.completed))

</script>

<template>
  <ListContainer v-if="completed.length > 0" >
      <TodoItem v-for="todo in completed" :key="todo.id" :todo="todo" />
  </ListContainer>
  <div v-else class="noTodos">
      <p class="msg">You haven't completed any todos yet!</p>
    </div>
</template>

<style>
.msg {
  @apply text-center mt-20 text-[var(--secondary-text-color)]
}

.noTodos{
  @apply h-screen
}
</style>
