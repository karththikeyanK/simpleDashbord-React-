import React from "react";
import Timetable from "./Timetable";

const Home = () => {
  return (
    <div>
      <div className="home-container d-flex flex-column align-items-center">
        <h1>Welcome to Our Website</h1>
        <p>This is a sample home page built with React.</p>
        <p>Feel free to explore!</p>
        <Timetable />
      </div>
    </div>
  )
}

export default Home
