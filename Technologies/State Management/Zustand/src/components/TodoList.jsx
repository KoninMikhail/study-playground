import {Stack,} from "@chakra-ui/react"
import {Todo} from "./Todo";
import {useFilters, useTodos} from "../store/Store";


export const TodoList = () => {
    const filter = useFilters(state => state.filter);
    const todos = useTodos(state => {
        switch (filter) {
            case 'completed' :
                return state.todos.filter((todo) => todo.completed )
            case 'uncompleted' :
                return state.todos.filter((todo) => !todo.completed )
            default :
                return state.todos
        }
    });

   return (
       <Stack minH={'300px'}>
           { todos.map((todo) => (
               <Todo key={todo.id} {...todo}/>
           ))}
       </Stack>
   )
}