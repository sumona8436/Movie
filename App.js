import React, { useEffect, useState } from "react";
// import reportWebVitals from "./reportWebVitals";
import Movie from "./components/Movie";
import { fetchAllDataFromDB } from "./utils/all_api";
import "./App.css";

function App() {
  const [movieData, setMovieData] = useState(null);

  const getAllData = () => {
    fetchAllDataFromDB("/getAllData")
      .then((res) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + res.data);
        setMovieData(res);
      })
      .catch(() => {
        console.log("under error section of getAllData");
      });
  };

  const Sidebar = () => {
    return (
      <aside className="sidebar">
        {/* Sidebar navigation links */}
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          {/* Add more navigation links as needed */}
        </ul>
      </aside>
    );
  };

  const MainContent = ({ movieData }) => {
    return (
      <main className="main-content">
        {Array.isArray(movieData) ? (
          movieData.map((movie) => <Movie key={movie._id} movie={movie} />)
        ) : (
          <p>No movies available</p>
        )}
      </main>
    );
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Netflix</h1>
      </header>
      <Sidebar />
      <div className="container">
        <MainContent movieData={movieData} />
      </div>
    </div>
  );
}

export default App;
