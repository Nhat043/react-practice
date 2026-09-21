import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    setTheme((current) =>
      current === "light" ? "dark" : "light",
    );
  }

  return (
    <main>
      <p>Theme: {theme}</p>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
    </main>
  );
}

export default App;