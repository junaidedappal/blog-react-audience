import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon,CDBBox } from 'cdbreact';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <CDBFooter className="shadow container bg-white">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg"
             
              width="30px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">Audience</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; The Audience. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <a className='text-dark'
           href=" ">made by RedApple.Tech

          </a>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
