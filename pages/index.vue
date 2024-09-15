<script setup>
useHead({
  title: 'My Todos',
  meta: [
    { name: 'description', content: 'Todo list application' }
  ]
})
</script>

<template>
  <Layout>
    <TodoList />
  </Layout>
</template>
