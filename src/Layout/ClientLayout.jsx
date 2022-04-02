import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import React from "react";

export default function ClientLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}