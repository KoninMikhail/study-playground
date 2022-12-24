import {Divider, VStack} from "@chakra-ui/react";
import {Filter} from "./components/Filter";
import {TodoList} from "./components/TodoList";
import {TotalTodos} from "./components/TotalTodos";
import {AddTodo} from "./components/AddTodo";
import {FetchTodos} from "./components/FetchTodos";
import {RemoveAllTodos} from "./components/RemoveAllTodos.jsx";

function App() {
  return (
   <VStack spacing={4}>
       <Filter/>
       <TodoList/>
       <Divider/>
       <TotalTodos/>
       <AddTodo/>
       <FetchTodos/>
       <RemoveAllTodos/>
   </VStack>
  )
}

export default App;
