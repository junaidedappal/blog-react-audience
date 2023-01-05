import { useState, useEffect } from "react";
import "./App.css";
import "./style.scss";
import "./media-query.css";
import Home from "./pages/Home";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail";
import AddEditBlog from "./pages/AddEditBlog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Videos from "./pages/Videos"
import Footer from "./components/Footer"
import Auth from "./pages/Auth";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import CategoryList from "./pages/CategoryList";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <div className="App grey-background">
      {/* <Navbar/> */}

      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer position="top-center" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home setActive={setActive} user={user} />} />
        <Route path="/category/:id" element={<CategoryList  user={user}/>} />

        <Route path="/detail/:id" element={<Detail setActive={setActive} />} />
        <Route
          path="/create"
          element={
            user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/update/:id"
          element={
            user?.uid ? <AddEditBlog user={user} setActive={setActive} /> : <Navigate to="/" />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/auth" element={<Auth setActive={setActive} setUser={setUser} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
