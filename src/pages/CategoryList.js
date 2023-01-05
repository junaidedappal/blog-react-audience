import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Tags from "../components/Tags";
import MostPopular from "../components/MostPopular";



const CategoryList = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [categoryBlogs, setCategryBlogs] = useState([]);
  var url = window.location.href;
  var array = url.split('/');
  var category = array[array.length-1];
  useEffect(() => {
    category && getCategoryBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const getCategoryBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("category", "==" ,  category  ));
    const querySnapshot = await getDocs(trendQuery);
    let categoryBlogs = [];
    querySnapshot.forEach((doc) => {
      categoryBlogs.push({ id: doc.id, ...doc.data() });
    });
    setCategryBlogs(categoryBlogs);
  };

  useEffect(() => {
    getCategoryBlogs();
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
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
    <div className="container container-fluid pb-4 pt-4 padding bg-white">
          <div>
         <h6 className="secondary"> {category} </h6>
     </div>
      <div className=" padding">
        <div className="row ">
        
          <div className="col-md-8">
            <BlogSection
              blogs={categoryBlogs}
              user={user}
              handleDelete={handleDelete}
            />
          </div>
          <div className="col-md-3">
            {/* <Tags tags={tags} /> */}
            <MostPopular blogs={blogs} />

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
