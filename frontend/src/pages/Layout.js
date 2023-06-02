import React from "react";
import Sidebar from "./Sidebar";
function Layout({ children,handleLogout }) {
    return (
        <div className = "flex">
            <div className="w-1/4 h-screen">
                <Sidebar handleLogout = {handleLogout}/>
            </div>
            <div className="w-3/4 h-screen">{children}</div>
        </div>
    );
}

export default Layout;
