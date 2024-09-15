<template>
      <div class="todoList">
        <slot/>
</div>
</template>

<style>
.todoList {
    @apply grid justify-center w-[90%] mx-auto md:justify-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
}

.todoForm{
  @apply flex
}
</style>