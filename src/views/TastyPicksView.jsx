import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem/MenuItem.jsx";

import styles from "./TastyPicksView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import Button from "../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useTastyPicks } from "../providers/TastyPicksProvider.jsx";

const TastyPicksView = () => {
  const { tastyPicks, setTastyPicks } = useTastyPicks();
  
  const navigate = useNavigate();
  
  const emptyTastyPicks = () => {
    if(tastyPicks.length === 0) return
    setTastyPicks([])
  }

  return (
    <>
      <NavBar className={styles.Navbar}>
        <h1 className={styles.navbarChildren}>ReDI React Restaurant</h1>

        <Button className={styles.navbarChildren} onClick={() => navigate("/")}>return Home</Button>
        <Button className={styles.navbarChildren} onClick={emptyTastyPicks} >Empty the Tasty Picks</Button>
      </NavBar>

      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {tastyPicks.length > 0 ? (
            tastyPicks.map((dish) => (
              <MenuItem
                dish={dish}
                key={dish.idMeal}
              />
            ))
          ) : (
            <p>No dishes listed :(</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TastyPicksView;
