import React from "react";
import { Box, Grid, Typography, Icon, Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import  {useState } from "react";
import AppointmentForm from "../pages/AppointmentForm";
// import AppointmentForm from "../pages/AppointmentForm";

function Appointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Box component="div" className="appointment">
          <Typography variant="h5">Make an Appointment</Typography>
          <Box component="div" className="appoin-text">
            <Typography variant="body">
              It is a long established fact that a reader will be distracted by
              <br /> the readable content of a page when looking at its layout.
              <br /> <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal <br />
              distribution of letters, as opposed to using 'Content here.
            </Typography>
          </Box>
          <Box className="icon-num">
            <LocalPhoneOutlinedIcon />
            <Typography variant="body1" ml={1}>
              7389684869
            </Typography>
          </Box>
          <Box className="icon-num">
            <LocalPostOfficeOutlinedIcon />
            <Typography variant="body1" ml={1}>
              sharmavikrant053@gmail.com
            </Typography>
          </Box>
          <Box className="req-btn">
            <Button
              className="req-btn2"
              variant="contained"
              onClick={handleOpenModal}
            >
              Request an Appointment
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box className="appoint-img-div">
          <img className="appoint-img" fullwidth src="" alt="Image 2" />
        </Box>
      </Grid>
      <AppointmentForm open={isModalOpen} onClose={handleCloseModal} />
    </Grid>
    
  );
  // {showAppointmentForm && <AppointmentForm />}
  
}

export default Appointment;
