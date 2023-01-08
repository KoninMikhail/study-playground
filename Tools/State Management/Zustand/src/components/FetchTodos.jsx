import {Button} from "@chakra-ui/react";
import {useTodos} from "../store/Store.js";
import shallow from "zustand/shallow";

export const FetchTodos = () => {
    const {fetchTodos, error, loading} = useTodos(state => ({
        loading: state.loading,
        error: state.error,
        fetchTodos: state.fetchTodos
    }), shallow)
    return (
        <Button isLoading={loading} onClick={()=> fetchTodos()}>
            {!error ? 'Get Todos from Network' : error}
        </Button>
    );
}