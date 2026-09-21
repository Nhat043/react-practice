import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <main>
      <h1>useRef playground</h1>

      <input ref={inputRef} placeholder="Type here..." />

      <button type="button" onClick={handleFocus}>
        Focus input
      </button>
    </main>
  );
}

export default App;