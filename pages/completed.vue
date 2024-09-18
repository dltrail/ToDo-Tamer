<script setup>
useHead({
  title: "My Completed Todos",
  meta: [{ name: "description", content: "completed todos" }],
});

import CompletedTodosList from "~/components/CompletedTodosList.vue";
import { useTodoStore } from "~/stores/todoStore";
const store = useTodoStore();
const isOpen = ref(false);
const completed = computed(() => store.todos.filter((todo) => todo.completed));

// Handle modal open and close
const handleToggleModalVisibility = () => {
  isOpen.value = !isOpen.value;
};

const handleConfirmBtnClick = () => {
  store.clearCompletedTodos();
  handleToggleModalVisibility();
};
</script>

<template>
  <Layout>
    <Button 
    id="clear-button"
    :disabled="completed.length === 0"
    @click="handleToggleModalVisibility"
    iconName="i-heroicons-trash"
    ><span>Clear Completed ToDo</span></Button>
    <CompletedTodosList />
    <Modal
      v-model="isOpen"
      class="modal"
      @toggleModal="handleToggleModalVisibility"
      @acceptModal="handleConfirmBtnClick"
    />
  </Layout>
</template>

<style scoped>
.modal {
  @apply w-96 items-center;
}

.disabled {
  @apply bg-pink-50;
}

.modalInner {
  @apply p-4  text-gray-50 h-96;
}

#clear-button {
  @apply mt-8 relative left-1/2 transform -translate-x-1/2;
}
</style>
