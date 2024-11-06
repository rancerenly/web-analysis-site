import { Theme } from "./types";

export const THEME_NAMES: string[] = ["auto", "light", "dark"];

export const THEME_READABLE_NAMES: Record<Theme, string> = {
  [Theme.Auto]: "Авто",
  [Theme.Light]: "Светлая",
  [Theme.Dark]: "Тёмная",
};

export const THEME_ICONS: Record<Theme, string> = {
  [Theme.Auto]: "bi-circle-half",
  [Theme.Light]: "bi-sun-fill",
  [Theme.Dark]: "bi-moon-stars-fill",
};
