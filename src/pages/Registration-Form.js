import React from 'react';
import { Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import img from "./Group 5.png"

const RegistrationForm = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Grid item xs={7} sx={{ padding: 6,paddingRight:"15%"}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%',textAlign:"center" }}>
              <Typography variant="h4"sx={{ fontWeight: 'bold' }}>Welcome to F.R.I.E.D</Typography>
              <Typography variant="h5">Register Yourself!</Typography>
              <Box sx={{ mt: 4 }}>
              {/* <label htmlFor="name" style={{ fontSize: '22px' }}>Name</label> */}
                <TextField id="name" label="Name" placeholder="Enter your name" fullWidth sx={{ width: "110" }}/>
              </Box>
              <Box sx={{ mt: 2 }}>
              {/* <label htmlFor="email" style={{ fontSize: '22px' ,textAlign:"start"}}>Email</label> */}
                <TextField id="email" label="Email" placeholder="Enter your email" fullWidth sx={{ width: "110" }}/>
              </Box>
              <Box sx={{ mt: 2 }}>
              {/* <label htmlFor="password" style={{ fontSize: '22px' ,textAlign:"start"}}>Password</label> */}
                <TextField id="password" label="Password" placeholder="Enter your password" fullWidth type="password" sx={{ width: "110" }}/>
              </Box>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary">Register</Button>
              </Box>
            </Box>
          </Grid>
      <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={img} alt="Registration" style={{ maxWidth: '100%', height: '45pc' }} />
          </Grid>
    </Box>
  );
};

export default RegistrationForm;
