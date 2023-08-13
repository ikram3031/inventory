import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarTab from "./SideBarTab";
import { toggleSideBar } from "@/redux/features/sideBarSlice";
import { Menu } from "@/lib/constants";

const SideBar = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector((store) => store.sideBar.isSideBarOpen)

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  }

  return (
    <div className={`sideBar ${showSideBar ? "sideBarOpen" : ""}`}>
      <button onClick={handleSideBar}>
        {showSideBar ? (
          <img 
            src="/static/left_arrow.svg"                
            alt="side bar arrow" 
            className="sideBar_arrow "
          />
        ) : (
          <img 
            src="/static/arrow.svg"
            alt="side bar arrow" 
            className="sideBar_arrow mb-50"
          />
        )}
      </button> 
      
      {
        showSideBar && (
          <div className="dashBoard">
            <img src="/static/dashboard.png" alt="" />
            <h4>DASHBOARD</h4>
          </div>
        )
      }

      <div className="sidebar_nav">
        {/* Navigation */}
        {Menu.map((item) => (
          <SideBarTab 
            key={item.title}
            title={item.title}
            iconUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default SideBar;
