import { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "react-pro-sidebar";
import { Link } from "react-router-dom";
const SidebarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [collapsed, setCollapsed] = useState(false)
  return (
    <div style={{display:'flex'}}>
      <Sidebar style={{width:'280px'}} 
      transition
      collapsed
      width="200px" 
      >
        
        <Menu style={{paddingTop:'20px'}}>
          <MenuItem
            icon={<MenuRoundedIcon />}
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2>Career Compass</h2>
          </MenuItem>
          {/* <MenuDivider/> */}
          {isOpen && (
            <>
              <MenuItem component={<Link to="/documentation" />}>
                Home
              </MenuItem>
              <SubMenu
                label={
                  <>
                    <i className="material-icons">Applied Jobs</i>
                  </>
                }
              >
                <MenuItem component={<Link to="/calendar" />}>
                  Video Edit
                </MenuItem>
                <MenuItem component={<Link to="/e-commerce" />}>
                  PhotoShop
                </MenuItem>
                <MenuItem component={<Link to="/calendar" />}>Figma</MenuItem>
                <MenuItem component={<Link to="/e-commerce" />}>
                  E-Canva
                </MenuItem>
              </SubMenu>

              <SubMenu
                label={
                  <>
                    <i className="calendar">Calendar</i>
                  </>
                }
              >
                <MenuItem component={<Link to="/calendar" />}>Days</MenuItem>
                <MenuItem component={<Link to="/e-commerce" />}>Weeks</MenuItem>
                <MenuItem component={<Link to="/calendar" />}>Months</MenuItem>
                <MenuItem component={<Link to="/e-commerce" />}>Years</MenuItem>
              </SubMenu>
              <MenuItem component={<Link to="/e-commerce" />}>
                E-commerce
              </MenuItem>
            </>
          )}
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SidebarNav;
