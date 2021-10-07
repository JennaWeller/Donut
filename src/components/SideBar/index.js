import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
import { Menu } from "antd";
import { Anchor } from "antd";
const { Link } = Anchor;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink href="#Iced">Iced</SidebarLink>
        <SidebarLink href="Glazed">Glazed</SidebarLink>
        <SidebarLink href="Filled">Filled</SidebarLink>
        <SidebarLink href="Cake">Cake</SidebarLink>
        <SidebarLink href="Chocolate">Chocolate</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
