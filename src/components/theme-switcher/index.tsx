import classNames from "classnames";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Theme } from "./types";
import { getColorScheme, getStoredTheme, getThemeIcon } from "./utils";
import ThemeListItem from "./theme-list-item";

function ThemeSwitcher(): JSX.Element {
  const [theme, setTheme] = useState(() => getStoredTheme());
  const [colorScheme, setColorScheme] = useState(() => getColorScheme(theme));
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
      if (storedTheme === Theme.Auto) {
        setColorScheme(getColorScheme(storedTheme));
      }
    });

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant={"primary"}>
        <i
          id={"theme-dropdown-icon"}
          className={classNames(themeIcon, "theme-icon")}
        />
        <span className={"visually-hidden"}>Выбор темы</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={"my-1"}>
        <ThemeListItem
          theme={Theme.Auto}
          onClick={() => setTheme(Theme.Auto)}
        />
        <ThemeListItem
          theme={Theme.Light}
          onClick={() => setTheme(Theme.Light)}
        />
        <ThemeListItem
          theme={Theme.Dark}
          onClick={() => setTheme(Theme.Dark)}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ThemeSwitcher;
