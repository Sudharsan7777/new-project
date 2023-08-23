import React from "react";
import CustomNavbar from "../navbar/NavBar";
import Imag from "../subHead/ImageLoader";
import SideBar from "../sidebar/SideBar";
import Body from "../body/Body";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";


export const HomePage = () => {
  return (
    <>
      
      <CustomNavbar />
      <Imag />  
      <SideBar />
      <Body/>  
      <Footer /> 

    </>
  );
};

export default HomePage;
