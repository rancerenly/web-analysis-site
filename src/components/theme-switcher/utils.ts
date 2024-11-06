import { THEME_ICONS, THEME_NAMES } from "./constants";
import { ColorScheme, Theme } from "./types";

export const getStoredTheme = (): Theme => {
  const value = localStorage.getItem("color-theme");
  if (value !== null && THEME_NAMES.includes(value)) {
    return value as Theme;
  } else {
    localStorage.setItem("color-theme", "auto");
    return Theme.Auto;
  }
};

export const getColorScheme = (theme: Theme): ColorScheme => {
  switch (theme) {
    case Theme.Auto:
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ColorScheme.Dark
        : ColorScheme.Light;
    case Theme.Light:
      return ColorScheme.Light;
    case Theme.Dark:
      return ColorScheme.Dark;
  }
};

export const getThemeIcon = (theme: Theme): string => {
  return THEME_ICONS[theme];
};
