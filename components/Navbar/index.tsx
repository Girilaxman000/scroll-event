import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

const Navbar = () => {
  const [changeBackground, setChangeBackground] = useState(false);

  useEffect(() => {
    const Background = (event) => {
      console.log(event?.currentTarget.scrollTop);
      if (event.currentTarget.scrollTop > 57) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }
    };

    window.addEventListener("scroll", Background);

    return () => window.removeEventListener("scroll", Background);
  }, []);

  return (
    <div
      className={
        changeBackground ? styles.scroll_navbar_element : styles.navbar_element
      }
    >
      <p>My Website</p>
      <button>Click me</button>
    </div>
  );
};

export default Navbar;
