export const CreateTodo = ({onCreate}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.todo.value;

        if(e.target.todo.value) {
            onCreate((prevTodos)=> [
                ...prevTodos,
                {
                    title,
                    completed: false,
                    date: Date.now()
                }
            ])
        }

        e.target.reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input placeholder="New todo" name="todo"/>
                <button type="submit" value={'Add todo'}/>
            </form>
        </>
    );
}