<script setup>
import { useTodoStore } from '~/stores/todoStore';

const todoStore = useTodoStore()
</script>

<template>
    <main>
        <div>
            Hello Vue
            <pre>{{ todoStore.todo }}</pre>
        </div>
    </main>
  </template>