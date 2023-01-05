import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { toast } from "react-toastify";
import MostPopular from "../components/MostPopular";
import Trending from "../components/Trending";
import SocialFollows from "../components/SocialFollows";


const Home = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState([]);
  const [DBlogs, setDBlogs] = useState([]);
  const [MBlogs, setMBlogs] = useState([]);


  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendBlogs(trendBlogs);
  };
  
  const getMoreBlogs = async () => {
    const MblogRef = collection(db, "blogs");
    const MQuery = query(MblogRef, limit(20));
    const MquerySnapshot = await getDocs(MQuery);
    let MBlogs = [];
    MquerySnapshot.forEach((doc) => {
      MBlogs.push({ id: doc.id, ...doc.data() });
    });
    setMBlogs(MBlogs);
  };
  const getLimitBlogs = async () => {
    const DblogRef = collection(db, "blogs");
    const DQuery = query(DblogRef, limit(10));
    const DquerySnapshot = await getDocs(DQuery);
    let DBlogs = [];
    DquerySnapshot.forEach((doc) => {
      DBlogs.push({ id: doc.id, ...doc.data() });
    });
    setDBlogs(DBlogs);
  };

  useEffect(() => {
    getTrendingBlogs();
    getLimitBlogs();
    getMoreBlogs();

    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getTrendingBlogs();
      getLimitBlogs();
    };
  }, [setActive]);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };


  return (
    <>
        <div className="container grey-background">
      <Trending blogs={trendBlogs} />
      </div>
    <div className="container container-fluid pb-2 pt-2 bg-white ">
  
        <div className="row ">

          <div className="col-lg-8 grey-background ">
            <BlogSection
              blogs={DBlogs}
              user={user}
              handleDelete={handleDelete}
            />
          </div>
          <div className="col-lg-4 ">
            <SocialFollows/>
            <MostPopular blogs={MBlogs} />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
