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
      <Button class="submit-button" :disabled="false" type="submit">
      submit</Button>
    </form>
  </div>
</template>

<style scoped>
.todo-form {
  @apply flex justify-center mt-2;
}

.form-input {
  @apply w-[80%] md:w-[65%] border-2  px-2 text-sm shadow-sm p-5 rounded-lg border-[var(--accent-color-2)] bg-[var(--accent-color)] text-white outline-[white] placeholder-white;
}

.submit-button {
  @apply p-2 bg-[var(--accent-color-2)]  text-white hover:bg-white hover:text-[var(--accent-color-2)] hover:border-[var(--accent-color-2)] text-sm shadow-sm;
}

input::placeholder {
  @apply opacity-25 text-xl;
}
input::placeholder:focus {
  @apply opacity-0;
}
</style>
