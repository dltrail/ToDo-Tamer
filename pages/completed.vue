<script setup>
useHead({
  title: 'My Completed Todos',
  meta: [
    { name: 'description', content: 'completed todos' }
  ]
})
</script>

<template>
    <Layout>
        <CompletedTodos/>
    </Layout>
</template>