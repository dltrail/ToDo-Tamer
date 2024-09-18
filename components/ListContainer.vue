<template>
    <section class="todo-container">  
      <div class="todoList">
        <slot />
      </div>
    </section>
  </template>
  
  <style scoped>
  
  .todoList {
    @apply flex flex-col gap-4 md:h-[60vh] overflow-y-auto w-[90%] mx-auto mt-[30px] pb-[50px]
  }
  
  .todoForm {
    @apply flex;
  }
  </style>
  