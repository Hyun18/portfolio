import { useState } from "react";
import "/src/styles/includes/Nav.css";
// import profileImg from "/src/assets/profile-pixabay.png";
import profileImg from "../assets/photo.jpeg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={isOpen ? "open" : ""}>
        <div className="closeSection" onClick={toggleNav}>
          <button className="hamburger"><p>☰</p></button>
        </div>

        <div className="profile-card">
          <img src={profileImg} alt="프로필 사진" />

          <div className="writer-info">
            <p className="name">김현희</p>
            <ul className="info">
              <div>
                <strong>GitHub</strong>:{" "}
                <a href="https://github.com/Hyun18/" target="_blank" rel="noreferrer">
                  github.com/Hyun18
                </a>
              </div>
            </ul>
          </div>
        </div>

        <a href="#Introduction" className="nav-link">
          Introduction
        </a>
        <a href="#SkillSet" className="nav-link">
          SkillSet
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#activities" className="nav-link">
          Activities
        </a>
      </nav>
    </>
  );
}

export default Nav;
