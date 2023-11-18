import React from "react";
import Button from "@mui/material/Button";

import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
function InfoCards({ product }) {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
     
    >



      <Grid item xs={12} className="bg" >
        <Box className="info-text">
            <Typography variant="h2" sx={{fontSize:"2rem"}}>
              LOREM IPSUM IS SIMPLY
            </Typography>
        </Box>

      <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"15px"}
          className="info-box"
        > 

        {product.card.map((item, idx) => (
          <Card style={{ width: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.alt}
              key={idx}
            />
            <CardContent>
              <Box textAlign="center">
                <Typography variant="h5" component="div">
                  Lorem
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={2}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Typography>
                <Box mt={2}>
                <Button variant="contained" color="primary" >
                  MORE INFO
                </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default InfoCards;
