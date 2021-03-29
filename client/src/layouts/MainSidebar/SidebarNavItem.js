import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'shards-react';

import SidebarDropDownNavItem from './SidebarDropDownNavItem';

const renderNormalItem = (item) => (
  <NavItem>
    <NavLink tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      <span>{item.value}</span>
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </NavLink>
  </NavItem>
);

const renderDropdownItem = (item) => {
  return <SidebarDropDownNavItem item={item} />;
};

const SidebarNavItem = ({ item }) => {
  return item.tabs && item.tabs.length ? renderDropdownItem(item) : renderNormalItem(item);
};

SidebarNavItem.propTypes = {
  item: PropTypes.object
};

export default SidebarNavItem;
