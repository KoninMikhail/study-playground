import {Checkbox, Text,  HStack} from "@chakra-ui/react";
import {useTodos} from "../store/Store.js";

export const Todo = ({id, title, completed}) => {
    const toggleTodo = useTodos(state => state.toggleTodo)
    return (
        <HStack spacing={4}>
            <Checkbox isChecked={completed} onChange={() => toggleTodo(id)}/>
            <Text>{title}</Text>
        </HStack>
    )
}