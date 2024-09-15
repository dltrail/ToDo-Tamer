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
const isRemoved = ref(false);

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

const removeFromDom = () => {
  isRemoved.value = true;
};

function saveEdit(id) {
  store.editTodo(id, title.value);
  // console.log(title.value)
  isEditting.value = false;
}

function handleEdit(val) {
  title.value = val;
}
</script>

<template>
  <div class="border-[var(--primary-color)] border-2" :class="{ 'active': isActive }">

    <p>{{ todo.title }}</p>
    <div v-if="!isEditting">
      <input
        type="checkbox"
        :checked="todo.completed"
        @click="handleTodoToggleCompleted(todo.id)"
      />
    </div>
    <div v-if="isEditting">
        <UInput
        type="text"
        :value="title"
        name="title"
        @input="handleEdit($event.target.value)"
      />
      <button @click="saveEdit(todo.id, title)">Save</button>
    </div>
    <button @click="handleTodoDelete(todo.id)">delete</button>
    <button @click="handleTodoEdit(todo.id)">edit </button>
  </div>
</template>

