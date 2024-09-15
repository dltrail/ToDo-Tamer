<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { ref } from "vue";

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
  addClass();

  // store.deleteTodo(id);
  setTimeout(() => {
    store.deleteTodo(id);
  }, 2000);
}

function handleTodoToggleCompleted(id) {
  store.toggleTodoCompleted(id);
}

function handleTodoEdit() {
  isEditting.value = true;
}

const addClass = () => {
  isActive.value = true;
};

function saveEdit(id) {
  store.editTodo(id, title.value);
  isEditting.value = false;
}

function handleEdit(val) {
  title.value = val;
}
</script>

<template>
  <div class="todo" :class="{ active: isActive }">
    <p class="todoTitle">{{ todo.title }}</p>
    <div v-if="!isEditting" class="inputCheckbox">
      <input
        type="checkbox"
        :checked="todo.completed"
        @click="handleTodoToggleCompleted(todo.id)"
      />
      <label> mark as completed</label>
    </div>
    <div class="editForm" v-if="isEditting">
      <UInput
        class="editInput"
        type="text"
        :value="title"
        name="title"
        @input="handleEdit($event.target.value)"
      />
      <UButton @click="saveEdit(todo.id, title)">Save</UButton>
    </div>
    <UButtonGroup class="actionBtns">
      <UButton color="white" v-if="!isEditting" @click="handleTodoEdit(todo.id)"
        ><UIcon name="i-heroicons-pencil-square" class="w-5 h-5" />
      </UButton>
      <!-- <UButton v-else="!isEditting" @click="saveEdit(todo.id, title)">Save</UButton> -->
      <UButton color="red" @click="handleTodoDelete(todo.id)">
        <UIcon name="i-heroicons-trash" class="w-5 h-5" />
      </UButton>
    </UButtonGroup>
  </div>
</template>

<style>
.todo {
  @apply border-[var(--secondary-text-color)] border w-[90vw] md:w-[unset] p-4 relative flex flex-row;
}
.todoTitle {
  @apply w-[85%] text-left;

}
.editForm {
  @apply flex w-full absolute;
}

.editForm .editInput {
  @apply w-[85%];
}
.editForm input {
  @apply h-16;
}


.actionBtns {
  @apply my-4;
}

label {
  @apply text-xs;
}

.inputCheckbox {
  @apply absolute bottom-2 text-center right-[10px] gap-2 flex align-middle;
}
</style>
