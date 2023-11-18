import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={3}>
        <Box>
          <Typography className="logo-text" variant="h6">
            LOGO HERE
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <div class="container">
          <div class="button">
            <div class="content">
              <input type="email" placeholder="Enter Your Email Id" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Box component="div" sx={{gap:"2px"}}>
          <img
            src="https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227_640.jpg"
            alt="fb pic"
          />
          <img src="https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227_640.jpg" alt="fb pic" />
          <img src="https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227_640.jpg" alt="fb pic" />
          <img src="https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227_640.jpg" alt="fb pic" />
        </Box>
      </Grid>
      <hr className="horizontal-line" />
    </Grid>
  );
}

export default Footer;
