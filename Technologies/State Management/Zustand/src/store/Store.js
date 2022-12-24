import create from 'Zustand';
import {nanoid} from "nanoid";
import {persist, devtools} from "zustand/middleware";

/**
 * Todos
 * @type {[{id: number, completed: boolean, title: string},{id: number, completed: boolean, title: string}]}
 */

export const useTodos = create(devtools((set, get) => ({
    todos: [],
    loading: false,
    error: null,
    /*addTodo: (title) => set((state)=> {
        return {
            todos: [...state.todos, {
                id: nanoid(),
                title,
                completed: false}]
        }
    })*/
    addTodo: (title) => {
        set({
            todos: [...get().todos, {id: nanoid(), title, completed: false}]
        })
    },
    toggleTodo: (todoId) => set({
        todos: get().todos.map(
            todo => todo.id === todoId
                ? {...todo, completed: !todo.completed}
                : todo
        )
    }),
    fetchTodos: async () => {
        set({loading: true});
        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if(!response.ok) {
                throw new Error('Failed to fetch. Try again');
            }

            set({
                todos: [...get().todos,...await response.json()],
                error: null
            })
        } catch (e) {
            set({
                error: e.message
            });
        } finally {
            set({
                loading: false,
            });
        }
    },
    clearAllTodos: () => {
        set({
            todos: [],
            error: null,
            loading: false,
        })
    }
})));


/**
 * Filter
 */

export const useFilters = create((set) =>({
    filter: 'all',
    setFilter: value => set({
        filter: value
    })
}))