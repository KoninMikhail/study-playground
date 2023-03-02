import { useState, useCallback } from "react";

type Action = { type: "INCREMENT" | "DECREMENT" };

type State = { count: number };

type Dispatch = (action: Action) => void;

// using useState, create useReducer

// useReducer args: reducer, initialArg, callback(lazy)
// useReducer returns: [state, dispatch]
function useReducer(
    reducer: (state: State, action: Action) => State,
    initialArgs: State,
    callback?: (state: State) => State
): [State, Dispatch] {
    // useState args: initialState | initialState callback
    // useState returns: [state, setState]
    const [state, setState] = useState(
        callback ? () => callback(initialArgs) : initialArgs
    );

    const dispatch = useCallback(
        (action: Action) => {
            return setState((prev) => reducer(prev, action));
        },
        [reducer]
    );

    return [state, dispatch];
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return { count: 0 };
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };
    return (
        <div>
            <button onClick={handleIncrement}>{"add one"}</button>
            {state.count}
            <button onClick={handleDecrement}>{"remove one"}</button>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}
