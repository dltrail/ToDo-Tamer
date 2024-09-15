<template>
  <div class="">
    <!-- <TodoForm /> -->

   

    <div class="todoList">
      <slot />
    </div>
  </div>
</template>

<style>
.todoList {
  @apply flex flex-col gap-4 h-[60vh] overflow-scroll w-[90%] mx-auto  mt-[50px];
}
/* .todoList {
  @apply grid justify-center h-[60vh] overflow-scroll w-[90%] mx-auto md:justify-start gap-8 sm:grid-cols-1 md:grid-cols-2  mt-[40px];
} */

.todoForm {
  @apply flex;
}
</style>
