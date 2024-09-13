import { defineStore } from "pinia";
import todoData from "../data/todo.json"

export const useTodoStore = defineStore('todoStore', () => {
    const todo = ref(todoData)

    return {todo}
})