import {Reorder, AnimatePresence, animate} from "framer-motion"

const variants = {
    initial:{
        opacity: 0,
        height: 0
    },
    animate: {
        opacity: 1,
        height: 'auto'
    },
    exit:{
        opacity: 0,
        height: 0
    }
}

export const Todos = ({todos = [], setTodos, onRemove}) => {
    return (
        <ol>
            <Reorder.Group as={'ol'} axys={'y'} values={todos}  onReorder={setTodos}>
                <AnimatePresence initial={false}>
                    {todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove}/>)}
                </AnimatePresence>
            </Reorder.Group>
        </ol>
    );
}

export const TodoItem = ({todo, onRemove}) => {
    return (
        <Reorder.Item
            value={todo}
            whileDrag={{scale: 1.3}}
            onDoubleClick={() => onRemove(todo.id)}
            {...variants}
        >
            <span>{todo.title}</span>
        </Reorder.Item>
    );
}