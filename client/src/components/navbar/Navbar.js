import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.scss";

const Navbar = () => {
  const [header, setHeader] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("alt-color");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={`Navbar ${header}`}>
      <div className="navTop">
        <div className="contact">
          <a href="#"><i className="fas fa-phone-alt"></i></a>
          <i className="fas fa-envelope"></i>
          <a href="https://www.instagram.com/rishikeshs355/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100022217718218"><i className="fab fa-facebook-square"></i></a>
        </div>
        <div>
          <Link to="/">
            <h1 className="alt-font">Balaji Hotel</h1>
          </Link>
        </div>
        <Link to="/booking">
          <button className="btn">Booking</button>
        </Link>
      </div>
      <div className="navBottom">
        <Link to="/rooms">
          Rooms <span>&#183;</span>
        </Link>
        <Link to="/dining">
          Dining <span>&#183;</span>{" "}
        </Link>
        <Link to="/tours">
          Tours <span>&#183;</span>{" "}
        </Link>
        <Link to="/about">About</Link>

        {/* <Link to="/about">About<span>&#183;</span>{" "}</Link>
        <Link to="/Admin">Admin</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
