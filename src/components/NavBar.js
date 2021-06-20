import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import { AppBar, Link } from "@material-ui/core";

const NavBar = () => {
  return (
    <nav>
      <AppBar position="static" className="nav">
        <div className="left-side">
          <GitHubIcon className="nav-icon" />
          <Link href="/"> GitHub User Search </Link>
        </div>
      </AppBar>
    </nav>
  );
};

export default NavBar;
