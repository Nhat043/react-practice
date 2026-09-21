import { useEffect, useState } from "react";
import Clock from "./Clock";
import UserList from "./UserList";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <main>
      <h1>useEffect playground</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <Clock />
      <UserList />
    </main>
  );
}

export default App;