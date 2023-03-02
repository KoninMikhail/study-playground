// using useReducer for create useState

// useState args: value | callback for initialState
// useState returns: [state, updater]
// reducer action: setState(0) | setState(state => state + 1)
function reducer<T, K>(state: T, action: K) {
    return typeof action === "function" ? action(state) : action;
}

function useState<T>(initialState: T) {
    // useReducer returns [state, dispatch]
    // useReducer args: reducerFn(state, action), initialState
    const [state, updater] = useReducer(
        reducer,
        typeof initialState === "function" ? initialState() : initialState
    );

    return [state, updater];
}

const Counter = () => {
    const [state, setState] = useState<number>(0);

    const handleAddOne = () => {
        setState((prev) => prev + 1);
    };

    return (
        <>
            <div>
                {state}
                <button onClick={handleAddOne}>{"add one"}</button>
            </div>
        </>
    );
};

export default function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}