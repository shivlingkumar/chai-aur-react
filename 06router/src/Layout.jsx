import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componet/Header/Header";
import Footer from "./componet/Footer/Footer";

function Layout(){
    return(
        <>

        <Header/>
        <Outlet/>
        <Footer/>
    
        </>

    )
} 


export default Layout