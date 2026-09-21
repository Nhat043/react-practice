import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <section>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </section>
    );
}