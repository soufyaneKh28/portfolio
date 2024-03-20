import React from "react";
import { logo, menu } from "../assets";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Navigationbar = () => {
  return (
    <header>
      <div className="container px-3    rounded-full ">
        <nav className=" flex justify-between  ">
          <div className=" w-20">
            <img src={logo} alt="logos" />
          </div>

          <div className="flex items-center">
            <AnchorTemporaryDrawer />
          </div>
        </nav>
      </div>
    </header>
  );
};

export function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="py-5 bg-[#242424] text-white flex p-3   flex-col"
    >
      <ul>
        <li>
          <a href="#Home" className=" nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className=" nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#Services" className=" nav-link">
            Services
          </a>
        </li>
        <li>
          <a href="#Projects" className=" nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" className=" nav-link">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
  let anchor = "top";
  return (
    <>
      <div className="flex items-center">
        <React.Fragment key={anchor}>
          <div className=" flex items-center">
            <img
              src={menu}
              alt="menu"
              className=" w-[35px] cursor-pointer"
              onClick={toggleDrawer(anchor, true)}
            />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
export default Navigationbar;
