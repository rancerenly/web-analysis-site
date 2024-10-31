import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

type Theme = "auto" | "light" | "dark";

function isOfTheme(value: string): value is Theme {
  return ["auto", "light", "dark"].includes(value);
}

type ColorScheme = "light" | "dark";

type ThemeIcon = "bi-circle-half" | "bi-sun-fill" | "bi-moon-stars-fill";

function ThemeSwitcher(): JSX.Element {
  const getStoredTheme = (): Theme => {
    const value = localStorage.getItem("color-theme");
    if (value !== null && isOfTheme(value)) {
      return value as Theme;
    } else {
      localStorage.setItem("color-theme", "auto");
      return "auto";
    }
  };

  const [theme, setTheme] = useState(() => getStoredTheme());

  const getColorScheme = (theme: Theme): ColorScheme => {
    if (theme === "auto") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      return theme as ColorScheme;
    }
  };

  const [colorScheme, setColorScheme] = useState(() => getColorScheme(theme));

  const getThemeIcon = (theme: Theme): ThemeIcon => {
    switch (theme) {
      case "light": {
        return "bi-sun-fill";
      }
      case "dark": {
        return "bi-moon-stars-fill";
      }
      default: {
        return "bi-circle-half";
      }
    }
  };

  const [themeIcon, setThemeIcon] = useState(() => getThemeIcon(theme));

  useEffect(() => {
    localStorage.setItem("color-theme", theme);
    setColorScheme(getColorScheme(theme));
    setThemeIcon(getThemeIcon(theme));
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", colorScheme);
  }, [colorScheme]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme === "auto") {
        setColorScheme(getColorScheme(storedTheme));
      }
    });

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant={"primary"}>
        <i
          id={"theme-dropdown-icon"}
          className={themeIcon}
          style={{ margin: "0 1px", width: "16px" }}
        />
        <span className={"visually-hidden"}>Выбор темы</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={"my-1"}>
        <Dropdown.Item onClick={() => setTheme("light")}>
          <i className={"bi-sun-fill me-2"} style={{ width: "16px" }}></i>
          <span>Светлая</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("dark")}>
          <i
            className={"bi-moon-stars-fill me-2"}
            style={{ width: "16px" }}
          ></i>
          <span>Тёмная</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("auto")}>
          <i className={"bi-circle-half me-2"} style={{ width: "16px" }}></i>
          <span>Авто</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ThemeSwitcher;
