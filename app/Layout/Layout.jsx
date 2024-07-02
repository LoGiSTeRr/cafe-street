import React from 'react';
import Header from "@/app/Layout/Header";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;