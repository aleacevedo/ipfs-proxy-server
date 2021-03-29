import React from "react";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarNavItems from "./SidebarNavItems";

const MainSidebar = () => {
  const classes = classNames("main-sidebar", "px-0", "col-12", "open");
  return (
    <Col className={classes} lg={{ size: 2 }} md={{ size: 3 }} tag="aside">
      <SidebarNavItems />
    </Col>
  );
};

export default MainSidebar;
