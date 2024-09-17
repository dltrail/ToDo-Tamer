<script setup>
useHead({
  title: "My Completed Todos",
  meta: [{ name: "description", content: "completed todos" }],
});

import CompletedTodosList from "~/components/CompletedTodosList.vue";
import { useTodoStore } from "~/stores/todoStore";
const store = useTodoStore();
const { todos } = storeToRefs(store);
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
    <button
      class="clearBtn"
      @click="handleToggleModalVisibility"
      :class="completed.length === 0 ? 'disabled' : ''"
    >
      <UIcon
        name="i-heroicons-trash"
        class="w-4 h-4 text-[var(--primary-button-color)]"
      />
      Clear Completed ToDo'
    </button>
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

.clearBtn {
  @apply mt-8 xl:right-[130px] md:right-[20px] md:absolute md:mx-auto text-xs border p-2 border-[var(--primary-button-color)] bg-white rounded-md text-[var(--primary-button-color)] hover:opacity-90 align-middle md:top-[125px];
}

.disabled {
  @apply pointer-events-none opacity-50;
}
/* .active{
  @apply  
} */
</style>
