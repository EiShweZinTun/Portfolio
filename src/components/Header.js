import React from "react";
//image
import nav from "../assets/nav.jpg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* <img src={nav} className="w-28 h-28 rounded-full"/>
          <button className="btn btn-sm">Hello!</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
