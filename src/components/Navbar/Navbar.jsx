import React from "react";
import "../../styles/navbarStyle.scss";

function Navbar() {
  const divClick = (event, param) => {
    console.log("Clicked");
    let offset = 70;
    window.scrollTo({
      behavior: "smooth",
      top:
        document.getElementById(param).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <div onClick={(event) => divClick(event, "contactSection")}>
            <li>
              <div>
                <p>Contact</p>
              </div>
            </li>
          </div>
          <div onClick={(event) => divClick(event, "Work")}>
            <li>
              <div>
                <p>Work</p>
              </div>
            </li>
          </div>
          <div onClick={(event) => divClick(event, "AboutMe")}>
            <li>
              <div>
                <p>About</p>
              </div>
            </li>
          </div>
          <div onClick={(event) => divClick(event, "Home")}>
            <li>
              <div>
                <p>Home</p>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
