import React from "react";
import { Link } from "react-router-dom";
import transitions from "bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import navbarStyles from "../styles/navbarStyles.css" ;


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
const Navbar = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (

<>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href=" " >Brand</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href=" " >Home <span className="sr-only">(current)</span></a></li>
        <li className="dropdown">
          <a href=" " className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Course <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href=" " >Accounting & Information System</a></li>
            <li><a href=" " >Aerospace Engineering</a></li>
            <li><a href=" " >Business Information Technology</a></li>
            <li><a href=" " >Computer Science</a></li>
            <li><a href=" " >Electrical & Computer Engineering</a></li>
            <li><a href=" " >Finance</a></li>
            <li><a href=" " >Math</a></li>
          </ul>
        </li>
        <li className="active"><a href=" " >Contact</a></li>
      </ul>
    </div>
  </div>
</nav>



    {/* <nav classNameName="container navbar navbar-expand-lg navbar-light  bg-faded ">
      <div classNameName="container-fluid bg-faded padding-media ">
         <div classNameName="container padding-media">
       
          <nav classNameName="navbar navbar-toggleable-md navbar-light">
          <h2 classNameName="white brand-name mt-3">The Audience</h2>

            <button
              classNameName="navbar-toggler mt-3 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span classNameName="fa fa-bars nav-button-style "></span>
            </button>
            <div
              classNameName="collapse navbar-collapse mt-3"
              id="navbarSupportedContent"
            >
              <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0 ">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    classNameName={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </Link>
                
                <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" classNameName={`nav-item nav-link ${
                      active === "category" ? "active" : ""
                    }`}>
        Category
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categoryOption.map((option, index) => (
                      <Link to={`/category/${option}`} style={{ textDecoration: "none" } }>
                        <li  classNameName={`catogory-list ${
                      active === "category" ? "active" : ""
                    }`}>
                      <option value={option || ""} key={index}>
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
                    classNameName={`nav-item nav-link ${
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
                    classNameName={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}
                  >
                    About
                  </li>
                </Link>
                <Link to="/videos" style={{ textDecoration: "none" }}>
                  <li
                    classNameName={`nav-item nav-link ${
                      active === "videos" ? "active" : ""
                    }`}
                    onClick={() => setActive("videos")}
                  >
                    Videos
                  </li>
                </Link>
              </ul>
              {userId ? (
                <>
              <div classNameName="row g-3">
                <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div classNameName="profile-logo">
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
                      <p style={{ marginTop: "12px", marginLeft: "5px", color:"white" }} >
                        {user?.displayName}
                      </p>
                      <li classNameName="nav-item nav-link " onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        classNameName={`nav-item nav-link ${
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
    </nav> */}


    </>
    
  );
};

export default Navbar;
