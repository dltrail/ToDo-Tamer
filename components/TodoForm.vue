<script setup>
import { ref } from "vue";
import { useTodoStore } from "~/stores/todoStore";

const localStore = useTodoStore();
const title = ref("");

function saveEdit() {
  if (title.value.length === 0) {
    return;
  }
  localStore.addTodo(title.value);
  title.value = "";
}

function handleAdd(val) {
  title.value = val;
}
</script>

<template>
    <div class="todoFormContainer">
      <form class="todoForm" @submit.prevent="saveEdit">
        <UInput
          class="w-96"
          type="text"
          :value="title"
          @input="handleAdd($event.target.value)"
          name="title"
        />
        <UButton type="submit" cla> Add Todo </UButton>
      </form>
    </div>

</template>

<style>
.todoFormContainer {
    @apply w-96 mx-auto
}

.todoForm{
  @apply flex
}
</style>
