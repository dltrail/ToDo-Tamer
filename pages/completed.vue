<script setup>
useHead({
  title: "My Completed Todos",
  meta: [{ name: "description", content: "completed todos" }],
});

import { useTodoStore } from "~/stores/todoStore";
const store = useTodoStore();
const {todos} = storeToRefs(store)
const isOpen = ref(false);
const completed = computed(() => store.todos.filter(todo => todo.completed))


// Handle modal open and close
const handleToggleModalVisibility = () => {
  isOpen.value = !isOpen.value
};

const handleConfirmBtnClick = () => {
  store.clearCompletedTodos()
  handleToggleModalVisibility()

}

</script>

<template>
  <Layout>
    <UButton @click="handleToggleModalVisibility" :disabled="completed.length === 0">Clear All</UButton>

    <CompletedTodos/>
    <Modal v-model="isOpen" class="modal" @toggleModal="handleToggleModalVisibility" @acceptModal="handleConfirmBtnClick" />
  </Layout>
</template>

<style>
.modal {
  @apply w-96 items-center;
}

.modalInner {
  @apply p-4  text-gray-50 h-96;
}
</style>
