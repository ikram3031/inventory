import { useState } from "react";
import SideBarTab from "./SideBarTab";

const SideBar = () => {

  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar)
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

      {/* Navigation */}
      <SideBarTab />
    </div>
  )
}

export default SideBar