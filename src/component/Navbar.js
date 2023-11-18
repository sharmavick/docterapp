import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Grid,item} from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="static" className='nav'>
      <Toolbar>
      {window.innerWidth >= 768 ? (
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : null}
        <Typography className='logo-text' variant="h6">
         LOGO HERE
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        
        <div className="form-inline my-2 my-lg-0">
          <InputBase className='searchbox '
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button className='btn1' variant="outlined">
            <SearchIcon className='icon' />
          </Button>
        </div>
      </Toolbar>
     
    </AppBar>
    
  );
};

export default Navbar;
