'use client'

import styles from "@/styles/layout/lateral-menu/LateralMenuButton.module.css";
import { IoMenu } from "react-icons/io5";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function LateralMenuButton({ toggleVisibility }) {
  const { landscapeDisplay } = useWindowDimensions();

  if (landscapeDisplay) {
    return (
      <button
        type="button"
        className={styles.menuButton}
        onClick={toggleVisibility}
        id="lateralMenuButtonId"
      >
        <IoMenu className={styles.menuIcon} />
        <p className="largeText">Menu</p>
      </button>
    );
  } else {
    return (
      <IoMenu
        className={styles.menuIcon}
        onClick={toggleVisibility}
        id="lateralMenuButtonId"
      />
    );
  }
}