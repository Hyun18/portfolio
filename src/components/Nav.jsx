import { useState } from "react";
import "/src/styles/includes/Nav.css";
import profileImg from "/src/assets/profile-pixabay.png";

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
              {/* <div>
                <strong>URL</strong>: <a href="https://github.com/Hyun18/">https://github.com/Hyun18/</a>
              </div> */}
              <div>
                <strong>Phone</strong>: 010-2956-2012
              </div>
              <div>
                <strong>GitHub</strong>: <a href="https://github.com/Hyun18/">https://github.com/Hyun18/</a>
              </div>
              <div>
                <strong>Email</strong>: <a href="mailto:workspacekhh@gmail.com">workspacekhh@gmail.com</a>
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
        {/* <a href="#Education" className="nav-link">
          Education
        </a> */}
      </nav>
    </>
  );
}

export default Nav;
