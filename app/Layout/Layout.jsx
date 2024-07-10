import React from 'react';
import Header from "@/app/Layout/Header";
import Footer from "@/app/Layout/Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;