import {Button} from "@chakra-ui/react";
import {useTodos} from "../store/Store.js";

export const RemoveAllTodos = () => {
    const {clearAllTodos} = useTodos();
    return <Button colorScheme='red' onClick={() => clearAllTodos()}>Remove all</Button>;
}