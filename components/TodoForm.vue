<script setup>
import { ref } from "vue";
import { useTodoStore } from "~/stores/todoStore";

const localStore = useTodoStore();
const title = ref("");

function saveEdit() {
  if (title.value.trim().length === 0) {
    return;
  }
  localStore.addTodo(title.value.trim());
  title.value = "";
}

function handleAdd(val) {
  title.value = val;
}
</script>

<template>
  <div class="todo-form-container">
    <form class="todo-form" @submit.prevent="saveEdit">
      <label for="todo-title" class="sr-only">Todo Title</label>
      <input
        id="todo-title"
        class="form-input"
        type="text"
        v-model="title"
        name="title"
        placeholder="Enter todo"
      />
      <button class="submit-button" type="submit">Add Todo</button>
    </form>
  </div>
</template>

<style scoped>
.todo-form {
  @apply flex justify-center mt-2;
}

.form-input {
  @apply w-[80%] md:w-[65%] border  px-2 text-sm shadow-sm p-5 rounded-lg;
}

.submit-button {
  @apply border p-2 bg-[var(--primary-color)]  text-white hover:opacity-50 text-sm shadow-sm rounded-lg;
}
</style>
