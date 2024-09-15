import { defineStore } from "pinia";
import todoData from "../data/todo.json"

export type Todo = {
    userId: number,
    id: number,
    title: string
    completed: boolean
}

let idCounter = 0

export const useTodoStore = defineStore('todoStore', () => {
    const todos = ref<Todo[]>([]);

    function addTodo(title: string) {
        todos.value.push({
          id: idCounter++,
          userId: 0,
          title,
          completed: false,
        });
      }

    function editTodo(id: number, title: string) {
        const updatedTodos = todos.value;
        const todoToUpdate = todos.value.find((todo) => todo.id === id)
        const indexOfTodoToUpdate = todos.value.findIndex((todo) => todo.id === id)

        if(todoToUpdate){
            updatedTodos[indexOfTodoToUpdate].title = title
        }

        // todos.value = updatedTodos
    }

    function deleteTodo(id: number) {
        todos.value = todos.value.filter((todo) => todo.id !== id)
    }

    function toggleTodoCompleted(idToFind: number) {
        const todoToToggle = todos.value.find((todo) => todo.id === idToFind)
        
        if(todoToToggle){
            todoToToggle.completed =!todoToToggle.completed
            console.log(todoToToggle)
        }
    }

    return {todos, addTodo, editTodo, deleteTodo, toggleTodoCompleted}

},
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      pick: ["todos"],
    },
  },
)