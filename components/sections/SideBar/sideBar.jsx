import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import SideBarTab from "./SideBarTab";
import { toggleSideBar } from "@/redux/features/sideBarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector((store) => store.sideBar.isSideBarOpen)

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  }

  return (
    <div 
    className={`sideBar ${showSideBar ? "sideBarOpen" : ""}`}
    > 
      <button
        onClick={handleSideBar}
      >
        {/* Arrow */}
        {
          showSideBar ? (
            <img 
              src="/static/left_arrow.svg"                
              alt="side bar arrow" 
              className="sideBar_arrow"
            />
          ) : (
            <img 
              src="/static/arrow.svg"
              alt="side bar arrow" 
              className="sideBar_arrow"
            />
          )
        }
        
      </button> 

      <div className="sidebar_nav">
        {/* Navigation */}
        <SideBarTab 
          title="Factory"
          iconUrl='/static/Factory.png'
        />
      </div>
    </div>
  )
}

export default SideBar