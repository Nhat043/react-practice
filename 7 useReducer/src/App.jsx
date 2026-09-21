import { useReducer } from "react";

function counterReducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state - 1;
  }

  return state;
}

function App() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <main>
      <p>Count: {count}</p>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </main>
  );
}

export default App;