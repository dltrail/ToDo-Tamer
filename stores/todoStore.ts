import { defineStore } from "pinia";

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const useTodoStore = defineStore('todoStore', () => {
    const todos = ref<Todo[]>([]);
    const storedValue = localStorage.getItem('idCounter');
    let idCounter = storedValue ? parseInt(storedValue, 10) : 1;

    // Utility function for persisting idCounter
    function saveIdCounter() {
        localStorage.setItem('idCounter', idCounter.toString());
    }

    // Add a new todo
    const addTodo = (title: string) => {
        todos.value.push({
            id: idCounter++,
            userId: 0,
            title,
            completed: false,
        });
        saveIdCounter();
    };

    // Edit an existing todo
    const editTodo = (id: number, title: string) => {
        const todoIndex = todos.value.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            todos.value[todoIndex].title = title;
        }
    };

    // Delete a todo
    const deleteTodo = (id: number) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
    };

    // Toggle todo completed status
    const toggleTodoCompleted = (id: number) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    };

    // Clear completed todos
    const clearCompletedTodos = () => {
        todos.value = todos.value.filter(todo => !todo.completed);
    };

    return {
        todos, 
        addTodo, 
        editTodo, 
        deleteTodo, 
        toggleTodoCompleted, 
        clearCompletedTodos
    };
}, {
    persist: {
        storage: piniaPluginPersistedstate.localStorage(),
        pick: ["todos", "idCounter"],
    },
});
