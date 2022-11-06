import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Users from "./Pages/Users";
import ErrorBoundary from "./Pages/ErrorBoundary";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import logo from "./Desert-Webpage-Img/logo.png";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="container">
      <Helmet>
        <title>Sahara</title>
        <meta name="Sahara Desert" content="The app is used to explore the Sahara Desert"/>
        <link rel="canonical" href="/"/>
      </Helmet>
      <nav className="nav-links">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </nav>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/user" element={<Users />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
