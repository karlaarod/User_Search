import React from 'react';
import {SearchForm, SearchList} from ".";
import './navbar.css'

import {

    AppBar,
    Link,
    Toolbar,
  } from "@material-ui/core";


const NavBar = ()=>{

    return (
        <nav>
        <AppBar position='static' 
        className='nav'

        >
           <Link href='/'> GitHub User Search </Link>
        </AppBar>
        </nav>
    )
}

export default NavBar;