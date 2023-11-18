import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Dialog } from "@mui/material";

function AppointmentForm({ open, onClose }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Author: FormBold Team</DialogTitle>
        <DialogContent>
          <Container className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      id="name"
                      name="name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      id="phone"
                      name="phone"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      id="email"
                      name="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid container spacing={2} className="formbold-px-3">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Date"
                        id="date"
                        name="date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Time"
                        id="time"
                        name="time"
                        type="time"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="formbold-pt-3">
                    <Typography variant="h6" className="formbold-form-label-2">
                      Address Details
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Area"
                      id="area"
                      name="area"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      id="city"
                      name="city"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="State"
                      id="state"
                      name="state"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Post Code"
                      id="post-code"
                      name="post-code"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  className="formbold-btn"
                >
                  Book Appointment
                </Button>
              </form>
            </div>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Book Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AppointmentForm;
