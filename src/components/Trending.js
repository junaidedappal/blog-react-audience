import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Trending = ({ blogs }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
     <div className="grey-background">
          <OwlCarousel className="owl-theme grey-background  col-12 col-md-12" {...options}>
        {blogs?.map((item) => (
          <div className="item grey-background mt-2 p-2" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <div className="trending-img-position  ">
                <div className="trending-img-size ">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="trending-img-relative"
                  />
                </div>
                <div className="trending-img-absolute"></div>
                <div className="trending-img-absolute-1">
                  <span className="text-white">{item.title}</span>
                  <div className="trending-meta-info">
                  {item.editor} 
                                     </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </OwlCarousel>
      </div>
    </>
  );
};

export default Trending;
