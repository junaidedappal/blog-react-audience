import React from "react";
import SocialFollows from "../components/SocialFollows";

const About = () => {
  return (
    <>
    <div className="container padding bg-white">
          <div>
         <h6 className="secondary mt-2">about us</h6>
     </div>
      <div className="col-md-12">
        <div className="row mx-0">
          <p>
           Audience is blogging website, it is cordinating by SPACE,an alumni accossiation of Sirajul Huda Dawa College Kuttyadi<br/>
           Call Us  :  +91 9605947827
          </p>
          <SocialFollows/>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
