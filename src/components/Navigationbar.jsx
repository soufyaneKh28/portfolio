import React from "react";
import { menu } from "../assets";

import Drawer from "@mui/material/Drawer";

const Navigationbar = () => {
  return (
    <header className="bg-main_dark  ">
      <div className="container px-3    ">
        <nav className=" flex justify-between items-center py-2  ">
          <div className=" w-20 text-2xl font-bold text-white">S-k</div>

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
