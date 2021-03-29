import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import styled from "styled-components";

import SidebarNavItem from "./SidebarNavItem";

const FixedWidthLink = styled(NavLink)`
  width: 1vw;
`;

const items = [
  { value: "Home", to: "/" },
  { value: "Api-Keys", to: "/api-keys" },
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
