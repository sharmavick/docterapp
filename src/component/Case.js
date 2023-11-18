import React from "react";
import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Case = ({ products }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "12px",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
      
      <Box component="div" className="cards-container">
      <Typography variant="h4">CASE OF THE MONTH</Typography>

        <Box
          sx={{
            width: "900px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
         
          {products.cards.map((item, idx) => (
            <Card key={idx} sx={{ width: "100%" }} className="card">
              <CardMedia
                component="img"
                image={item.image}
                alt={item.alt}
                sx={{ width: "100%" }}
              />
              <CardContent className="card-content">
                <Typography className="card-head" variant="h5">
                  {item.heading}
                </Typography>
                <Typography className="card-subhead" variant="body1">
                  {item.subheading}
                </Typography>
                <Typography className="card-text" variant="body2">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        </Box>
      </Grid>
    </Grid>

    
  );
};

export default Case;
