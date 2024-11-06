import classNames from "classnames";
import { MouseEventHandler } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Theme } from "./types";
import { THEME_ICONS, THEME_READABLE_NAMES } from "./constants";
import "./styles.css";

type ThemeListItemProps = {
  theme: Theme;
  onClick: MouseEventHandler;
};

function ThemeListItem({ theme, onClick }: ThemeListItemProps): JSX.Element {
  const themeName: string = THEME_READABLE_NAMES[theme];
  const iconClass: string = THEME_ICONS[theme];
  return (
    <Dropdown.Item onClick={onClick}>
      <i className={classNames(iconClass, "me-2", "theme-icon")} />
      <span>{themeName}</span>
    </Dropdown.Item>
  );
}

export default ThemeListItem;
