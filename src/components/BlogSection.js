import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";


const BlogSection = ({ blogs, user, handleDelete }) => {
  const userId = user?.uid;
  return (
<>
    {/* <div className="blog-heading text-start  mb-2 mt-2 bg-white ">Articles</div> */}

    <div  className="grey-background "> 

      {blogs?.map((item) => (
        <div className="row pb-2 p-2 mt-2 grey-background " key={item.id}>
          <div className="col-md-5  blog-container border-round">
            <div className="hover-blogs-img">
              <div className="blogs-img">
                <img src={item.imgUrl} alt={item.title} />
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-md-7 blog-container border-round ">
            <div className="text-start ">
           
              <Link to={`/category/${item.category}`}>
              <h6 className="category catg-color">{item.category}</h6>
              </Link>
              <span className="title py-2">{item.title}</span>

              <span className="meta-info">
                <p className="author">  🖋️ {item.editor}</p> 
              </span>
            </div>
            <div className="short-description text-start">
              {excerpt(item.description, 120)}
            </div >
            
            <Link to={`/detail/${item.id}`} >
              <button className="btn btn-read  md-2 pd-2">Read More</button>
            </Link>
            {userId && item.userId === userId && (
              <div style={{ float: "right" }}>
                <FontAwesome
                  name="trash"
                  style={{ margin: "15px", cursor: "pointer" }}
                  size="2x"
                  onClick={() => handleDelete(item.id)}
                />
                <Link to={`/update/${item.id}`}>
                  <FontAwesome
                    name="edit"
                    style={{ cursor: "pointer" }}
                    size="2x"
                  />
                </Link></div>
              
            )}
          </div>
          
        </div>
      ))}
      {/* <div> 
          <Link to={`/`} >
              <button className="btn btn-viewmore  md-2 pd-2">View More</button>
            </Link>
            </div> */}
    </div>
    </>
  );
};

export default BlogSection;
