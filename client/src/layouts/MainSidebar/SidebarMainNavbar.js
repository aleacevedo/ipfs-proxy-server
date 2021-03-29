import React from "react";
import { Navbar, NavbarBrand } from "shards-react";

const SidebarMainNavbar = () => {
  return (
    <div className="main-navbar">
      <Navbar
        className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
        type="light"
      >
        <NavbarBrand
          className="w-100 mr-0"
          href="#"
          style={{ lineHeight: "25px" }}
        >
          <div className="d-table m-auto">
            <img
              alt="Admin"
              className="d-inline-block align-top mr-1"
              id="main-logo"
              style={{ width: "25px" }}
            />
            <span className="d-inline-block"> Partners </span>
          </div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default SidebarMainNavbar;
