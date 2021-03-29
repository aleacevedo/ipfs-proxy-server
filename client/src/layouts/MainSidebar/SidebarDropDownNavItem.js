import React from 'react';
import {
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'shards-react';

import { NavLink as RouteNavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class SidebarDropDownNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.item;
    this.state = {
      open: false,
      active: false
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  };

  render() {
    const toggleBackground = this.state.open ? 'rgba(0, 0, 0, 0.05)' : 'transparent';
    const toggleHover = this.state.open ? '0.1' : '0.05';

    return (
      <Dropdown className="FlexColumn" group open={this.state.open} toggle={this.toggle}>
        <div className="FlexRow" style={{ cursor: 'pointer' }}>
          <div className="Flex3">
            <NavItem active={this.state.active} style={{ cursor: 'pointer' }}>
              <NavLink tag={RouteNavLink} to={this.item.to}>
                {this.item.htmlBefore && (
                  <div
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: this.item.htmlBefore }}
                  />
                )}
                <span>{this.item.value}</span>
                {this.item.htmlAfter && (
                  <div
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: this.item.htmlAfter }}
                  />
                )}
              </NavLink>
            </NavItem>
          </div>
          <Toggle backgroundcolor={toggleBackground} hovercolor={toggleHover} theme="none">
            <em className="material-icons" style={{ fontSize: 25 }}>
              expand_more
            </em>
          </Toggle>
        </div>
        <div className="FlexColumn">
          <DropdownMenu>
            {this.item.tabs.map((tab, i) => {
              return (
                <DropdownItem key={i}>
                  <NavLinkCustom tag={RouteNavLink} to={tab.to}>
                    {tab.value && <span>{tab.value}</span>}
                  </NavLinkCustom>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </div>
      </Dropdown>
    );
  }
}

const NavLinkCustom = styled(NavLink)`
  && {
    padding: 0em;
  }
`;

const Toggle = styled(DropdownToggle)`
  && {
    flex: 1;
    padding: 0;
    background-color: ${(props) => props.backgroundcolor};

    &:hover {
      background-color: rgba(0, 0, 0, ${(props) => props.hovercolor});
    }
  }
`;

SidebarDropDownNavItem.propTypes = {
  item: PropTypes.object
};

export default SidebarDropDownNavItem;
