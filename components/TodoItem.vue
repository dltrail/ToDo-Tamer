<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { ref } from "vue";
import { debounce } from "lodash";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const store = useTodoStore();
const isActive = ref(false);
const isEditting = ref(false);
const title = ref(props.todo.title);

function handleTodoDelete(id) {
  isActive.value = true; // Directly setting value
  setTimeout(() => {
    store.deleteTodo(id);
  }, 800);
}

function handleTodoToggleCompleted(id) {
  store.toggleTodoCompleted(id);
}

function handleTodoEdit() {
  isEditting.value = true;
}

const handleEdit = debounce((val) => {
  title.value = val;
}, 300);

function saveEdit(id) {
  store.editTodo(id, title.value);
  isEditting.value = false;
}
</script>

<template>
  <div class="todo-item" :class="{ active: isActive, strike: todo.completed }">
    <div v-if="!isEditting" class="flex items-center w-full">
      <p class="todo-title">{{ todo.title }}</p>

      <div class="todo-checkbox-container">
        <input
          :id="`completed-${todo.id}`"
          type="checkbox"
          :checked="todo.completed"
          @change="handleTodoToggleCompleted(todo.id)"
        />
        <label :for="`completed-${todo.id}`"> Mark as completed</label>
      </div>

      <div class="action-buttons">
        <UButton
          color="white"
          v-if="!isEditting"
          @click="handleTodoEdit(todo.id)"
          :disabled="todo.completed"
          aria-label="Edit Todo"
        >
          <UIcon name="i-heroicons-pencil-square" class="w-5 h-5 text-[var(--accent-color-2)]" />
        </UButton>
        <UButton
          color="white"
          :disabled="todo.completed"
          @click="handleTodoDelete(todo.id)"
          aria-label="Delete Todo"
        >
          <UIcon name="i-heroicons-trash" class="w-5 h-5 text-[var(--accent-color)]" />
        </UButton>
      </div>
    </div>

    <div class="edit-form" v-if="isEditting">
      <label :for="`edit-title-${todo.id}`" class="sr-only">Edit Todo Title</label>
      <input
        class="edit-input"
        :id="`edit-title-${todo.id}`"
        type="text"
        v-model="title"
        @input="handleEdit($event.target.value)"
        placeholder="Edit todo title"
      />
      <div class="edit-button-group">
        <button
          class="button--cancel"
          @click="isEditting = false"
        >
          Cancel
        </button>
        <button
          class="button--accept"
          @click="saveEdit(todo.id)"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  @apply border-[var(--primary-color)] p-5 border w-full  relative flex flex-row shadow-sm rounded-lg;
}
.todo-title {
  @apply w-[86%] text-left;
}
.todo-checkbox-container {
  @apply absolute bottom-2 text-center right-[10px] gap-2 flex align-middle;
}
.edit-form {
  @apply flex flex-col z-50 w-[100%] justify-end;
}
.edit-button-group {
  @apply flex justify-end mt-2;
}
.edit-input {
  @apply w-[100%] h-16 border px-2 border border-[var(--accent-color)];
}
.button--accept {
  @apply border p-2 bg-[var(--accent-color-2)] rounded-md text-white hover:opacity-50 text-sm;
}
.button--cancel {
  @apply border p-2 text-[var(--accent-color-2)] rounded-md bg-white hover:opacity-50 text-sm;
}
.action-buttons {
  @apply mb-4;
}
.todo-item.strike p {
  @apply line-through;
}
.todo-checkbox-container label {
  @apply uppercase text-[10px] tracking-wider
}
:disabled {
  @apply hidden
}
</style>
