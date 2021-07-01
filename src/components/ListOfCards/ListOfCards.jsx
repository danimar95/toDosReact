import { React, useEffect } from "react";
import CreatedCard from "../CreatedCard/CreatedCard";
import { useSelector, useDispatch } from "react-redux";
import "./ListOfCards.css";
import { getTodosAsync } from "../../redux/todoSlice";

const listOfCards = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <ul className="listOfCards">
      {todos.map((todo) => (
        <CreatedCard key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default listOfCards;
