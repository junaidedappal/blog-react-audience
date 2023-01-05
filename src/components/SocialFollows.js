import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialStyles from "../styles/socialStyles.css" ;
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <>
    <div className="bg-white">
    <div className="blog-heading text-start  py-2 mb-4 mt-2 ">Social Channels</div>
    <div className="social-container " style={SocialStyles}>
      <h4 className="secondary">Connect with Us!!!</h4>
      <a
        href=" "
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/107463628766617/photos/a.107463665433280/107463685433278/?type=3&scmts=scwspsdd"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href=" " className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      {/* <a
        href=" "
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a> */}
    </div></div>
    </>
  );
}
