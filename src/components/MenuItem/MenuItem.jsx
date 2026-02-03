import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./MenuItem.module.css";
import {Tooltip} from "react-tooltip";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useTastyPicks } from "../../providers/TastyPicksProvider";


const MenuItem = ({ dish }) => {
  const { strMeal: name, strMealThumb: image } = dish  ?? {};
  const { tastyPicks = [], setTastyPicks } = useTastyPicks() ?? {};
  const navigate = useNavigate();

  const addToTastyPicks = () => {
    setTastyPicks([...(tastyPicks || []), dish])
  }

  const deleteFromTastyPicks = () => {
    const editedList = tastyPicks.filter(item => item.idMeal !== dish.idMeal)
    setTastyPicks(editedList)
  }

  const isAlreadyListed = () => {
    const isExisted = tastyPicks.find(item => item.idMeal === dish.idMeal)
    return isExisted
  }

  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>
      <button onClick={isAlreadyListed() ? deleteFromTastyPicks : addToTastyPicks}
      disabled={!isAlreadyListed}
      data-tooltip-id="my-tooltip" 
      data-tooltip-content={isAlreadyListed() ? "Delete from tasty picks" :"Add to tasty picks"}
      className={styles.addToTastyPicksButton}
      >{isAlreadyListed() ? <FaTrash /> : <FaPlus/>}</button>
      <Tooltip id="my-tooltip" place="top" effect="solid" />
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button onClick={() => navigate(`/meals/${dish.idMeal}`)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
