import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import Menu from "../../components/Menu";
import Navbarcomp from "../../components/Navbarcomp";
import Filter from "../../components/Filter";
const Home = ({ onUpdateValue }) => {
  const [selectedState, setSelectedState] = useState("");
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // const products = [
  //   { id: 1, title: "bottle" },
  //   { id: 2, title: "lunch" },
  //   { id: 3, title: "dinner" },
  // ];
  // const [count, setcount] = useState(0);
  // const [todos, setTodos] = useState([]);
  // const [todotitle, setTodostitle] = useState("");
  // const [tododesc, setTodosdesc] = useState("");
  // const handleTodo = () => {
  //   const newTodo = {
  //     title: todotitle,
  //     desc: tododesc,
  //   };

  // Update the state by spreading the existing todos array and adding the new todo
  //   setTodos([...todos, newTodo]);

  //   // Clear input fields after adding todo
  //   setTodostitle("");
  //   setTodosdesc("");
  // };
  // const showTodo = () => {
  //   console.log(todos);
  // };
  // const handleClick = () => {
  //   let c = count + 1;
  //   setcount(c);
  //   console.log(c);
  // };
  return (
    <div className="home">
      <div className="banner">
        <Navbarcomp onUpdateValue={onUpdateValue} />
        <div className="opacity">
          <h1>INDIA</h1>
          <h2>
            "Discover the Colors of India: Your Journey Starts Here! Plan Your
            Tours for anywhere in India"
          </h2>
          <a href="#main">
            <button className="banner-btn">Explore the culture</button>
          </a>
        </div>
      </div>
      <section className="main" id="main">
        <div className="container-fluid">
          <div className="main-container">
            <h1>Plan your trip</h1>

            <label htmlFor="country-state">Select State:</label>
            <select
              id="country-state"
              name="country-state"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Select state</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Agra">Agra</option>
              <option value="Kolkata">Kolkata</option>
            </select>

            <p>Selected State: {selectedState}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
