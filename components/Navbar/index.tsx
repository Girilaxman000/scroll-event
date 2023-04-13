import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { useScrollHook } from "../../hooks/useScrollHook";

const Navbar = () => {
  const result = useScrollHook();
  return (
    <div>
      <div
        className={
          result > 57 ? styles.scroll_navbar_element : styles.navbar_element
        }
      >
        <p>My Website</p>
        <button>Click me</button>
      </div>
    </div>
  );
};

export default Navbar;
