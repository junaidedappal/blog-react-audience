import React from "react";
import { Link } from "react-router-dom";
import transitions from "bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


const categoryOption = [
  "QURAN",
  "PROPHET",
  "STUDY",
  "BIOGRAPHY",
  "TASAWUF",
  "NARRATIVE",
  "POLITICS",
  "FEATURE",
  "BOOK REVIEW",
  "FICTION",
];
const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <nav className="container navbar navbar-expand-lg navbar-light  bg-white ">
      <div className="container-fluid bg-white padding-media ">
         <div className="container padding-media">
       
          <nav className="navbar navbar-toggleable-md navbar-light">
          <h2 className=" myblue mt-3 logoname">THE AUDIENCE</h2>

            <button
              className="navbar-toggler mt-3 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars nav-button-style "></span>
            </button>
            <div
              className="collapse navbar-collapse mt-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </Link>
                
                <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className={`nav-item nav-link ${
                      active === "category" ? "active" : ""
                    }`}>
        Category
      </Dropdown.Toggle>
      <Dropdown.Menu className="overflow-items">
        {categoryOption.map((option, index) => (
                      <Link to={`/category/${option}`} style={{ textDecoration: "none" } }>
                        <li  className={`catogory-list overflow-items ${
                      active === "category" ? "active" : ""
                    }`}
                    >
                      <option className={`overflow-items`} value={option || ""} key={index}>
                        {option} </option>
                      </li>
                      </Link>
                     
                   
                  ))}
      </Dropdown.Menu>
      </Dropdown>

                {userId? (
                  <>
                <Link to="/create" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => setActive("create")}
                  >
                    Create
                  </li>
                </Link>
                  </>
                ):(
                  <>
                  </>
                )}
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}
                  >
                    About
                  </li>
                </Link>
                {/* <Link to="/videos" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "videos" ? "active" : ""
                    }`}
                    onClick={() => setActive("videos")}
                  >
                    Videos
                  </li>
                </Link> */}
              </ul>
              {userId ? (
                <>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        />
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px", color:"#666" }} >
                        {user?.displayName}
                      </p>
                      <li className="nav-item nav-link " onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        }`}
                        onClick={() => setActive("login")}
                      >
                        Login
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
             
                </>
              ) : (
                <>
                </>
              )}
                  

         
            </div>
          </nav>
      
        </div>
      </div>
    </nav>
    
  );
};

export default Header;
