import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((current) =>
      current === "light" ? "dark" : "light",
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main>
        <h1>useContext playground</h1>
        <ThemeToggle />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;