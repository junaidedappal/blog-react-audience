import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
const MostPopular = ({ blogs }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white mt-2">
            <div className="blog-heading text-start  py-2 mb-4 ">categories</div>
            <div className="mb-4 border-bottom">
<ul>
       {categoryOption?.map((item) => (
    <Link to={`/category/${item}`} style={{ textDecoration: "none" } }>
    <li className="list-cat border-bottom">{item}</li></Link>

       ))}
</ul></div>
      <div className="blog-heading text-start  py-2 mb-4 ">Related Post</div>
      {blogs?.map((item) => (
        <div
          className="row pb-3 border-bottom"
          key={item.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          <div className="col-5 align-self-center ">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="most-popular-img"
            />
          </div>
          <div className="col-7 padding">
            <div className="text-start most-popular-font">{item.title}</div>
            <div className="text-start most-popular-font-meta">
              {item.timestamp.toDate().toDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
