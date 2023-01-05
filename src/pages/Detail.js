import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MostPopular from "../components/MostPopular";
import { db } from "../firebase";
import {TelegramShareButton, FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";
import {FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon} from "react-share";
import useDocumentTitle from '../helpers/useDocumentTitle';
import { Link } from "react-router-dom";


const Detail = ({ setActive }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogsData = async () => {
      const blogRef = collection(db, "blogs");
      const blogs = await getDocs(blogRef);
      setBlogs(blogs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      let tags = [];
      blogs.docs.map((doc) => tags.push(...doc.get("tags")));
      let uniqueTags = [...new Set(tags)];
    };

    getBlogsData();
  }, []);

 

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const shareUrl = window.location.href;
  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    setActive(null);
  };
  
  useDocumentTitle(blog?.title);

  return (
    <>
  
    <div className="single bg-white container">


      <div className="container-fluid pb-4 pt-4 padding blog-single-content">
        <div className=" padding">
          <div className="row ">
            <div className="col-12 col-md-12 col-lg-8 ">
            {/* <div
      className="container  blog-title-box "
      style={{ backgroundImage: `url('${blog?.imgUrl}')` }}
    >
      <div className="overlay"></div>
      <div className="blog-title">
        <span>{blog?.timestamp.toDate().toDateString()}</span>
        <h2 >{blog?.title}</h2>
        <span> {blog?.editor} </span>
      </div>
    </div > */}
            <div className="">

            <p className="pt-2 my-black">"{blog?.title}"</p>
            <Link to={`/category/${blog?.category}`}>
              <h6 className="category catg-color">{blog?.category}</h6>
              </Link>
            <img className="single-img" src={blog?.imgUrl} alt={blog?.title} />
                


             
             </div>
              <p className="text-start secondary pt-2">{blog?.description}</p>
              
              <span className="poppins text-start">
                <p className="author"> editor : {blog?.editor}</p>
              </span>
              <div > 
      <FacebookShareButton
          url={shareUrl}
          quote={'I hope you like it, Read and share'}
          hashtag={'#Audience.in'}
        className="p-2" >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#Audience'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote={'I hope you like it, Read and share'}
          hashtag={'#Audience.in'}
        className="p-2" >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <TelegramShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#Audience'}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
        <span className="poppins">share it on your wall!!</span>
      </div>
            </div>
            <div className="col-lg-4 grey-background">
              <MostPopular blogs={blogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Detail;
