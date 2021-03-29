import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";

const items = [
  { value: "Home", to: "/home" },
  { value: "Api-Keys", to: "/api-keys" },
  { value: "LogOut", to: "/logout" },
];

const SidebarNavItems = () => {
  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {items.map((item, idx) => (
          <SidebarNavItem item={item} key={idx} />
        ))}
      </Nav>
    </div>
  );
};

export default SidebarNavItems;
