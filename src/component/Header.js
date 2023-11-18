import React from "react";
import { Typography, InputBase, Button, Grid, Box, } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box component="div" className="header-sec">
            <Link to="/home" className="hovered-typography">
              <Button variant="body">HOME</Button>
            </Link>
            <Link to="/about" className="hovered-typography">
              <Button variant="body">ABOUT</Button>
            </Link>
            <Link to="/docter" className="hovered-typography">
              <Button variant="body">DOCTOR</Button>
            </Link>
            <Link to="/location" className="hovered-typography">
              <Button variant="body">LOCATION</Button>
            </Link>
            <Link to="/blogs" className="hovered-typography">
              <Button variant="body">BLOGS</Button>
            </Link>
            <Link to="/service" className="hovered-typography">
              <Button variant="body">SERVICE</Button>
            </Link>
            <Link to="/nopage" className="hovered-typography">
              <Button variant="body">NOPAGE</Button>
            </Link>
          </Box>
        </Grid>
        {/* intro img */}
        <Grid item xs={12}  sx={{ backgroundColor: "#f5f6f7" }}>
          <Box component="div" className="intro-landing" mt={2}>
            <Typography variant="h4">WELCOME TO OUR SITE</Typography>
            <Box component="div" justifyContent="center">
              
                <img
                  className="circleImage"
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D"
                />
              
            </Box>
            <Box textAlign="center" p={2}  className="landing-text">
              <Typography variant="body">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                <br /> {/* Add line breaks with <br /> */}
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here.
                <br />
              </Typography>
              <Typography variant="body" mt={2}>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' <br /> will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose .
              </Typography>
            </Box>
          </Box>
          <Box className="btn2" component="div" textAlign="center">
          <Link to="#" >
            <Button className="info-btn2" variant="contained">More Info</Button>
          </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
