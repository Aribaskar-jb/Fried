// import React from "react";
// import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
// import img from "./x.jpg";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const RegistrationForm = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Grid item xs={7} sx={{ padding: 6, paddingRight: "15%" }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             height: "100%",
//             textAlign: "center",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", color: "#d99426" }}
//           >
//             Welcome to F.R.I.E.D
//           </Typography>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#27292a" }}
//           >
//             Register Yourself!
//           </Typography>
//           <Box sx={{ mt: 4 }}>
//             <TextField
//               id="name"
//               label="Name"
//               placeholder="Enter your name"
//               fullWidth
//               sx={{ width: "110" }}
//             />
//           </Box>
//           <Box sx={{ mt: 2, color: "black" }}>
//             <TextField
//               id="email"
//               label="Email"
//               placeholder="Enter your email"
//               fullWidth
//               sx={{ width: "110" }}
//             />
//           </Box>
//           <Box sx={{ mt: 2 }}>
//             <TextField
//               id="password"
//               label="Password"
//               placeholder="Enter your password"
//               fullWidth
//               type="password"
//               sx={{ width: "110" }}
//             />
//           </Box>
//           <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
//             <Button
//               variant="contained"
//               color="primary"
//               endIcon={<ArrowForwardIcon />}
//             >
//               Next
//             </Button>
//           </Box>
//         </Box>
//       </Grid>
//       <Grid
//         item
//         xs={5}
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//       >
//         <img
//           src={img}
//           alt="Registration"
//           style={{
//             maxWidth: "100%",
//             height: "45pc",
//             boxShadow: "0px 2px 100px rgba(0, 0, 0, 0.5)",
//             borderRadius: "20px",
//           }}
//         />
//       </Grid>
//     </Box>
//   );
// };

// export default RegistrationForm;
import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img from "./x.jpg";
import img1 from "./Group5.png";
import "../index.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formVisible, setFormVisible] = useState(true);
  const navigate = useNavigate();

  const handleNextClick = () => {
    setFormVisible(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid
        item
        xs={7}
        sx={{
          padding: 6,
          paddingRight: "15%",
          maxWidth: "100%",
          height: "45pc",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.5s",
          transform: formVisible ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            transition: "opacity 0.5s",
            opacity: formVisible ? 1 : 0,
          }}
        > */}
          {formVisible ? (
                    <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                      textAlign: "center",
                      transition: "opacity 0.5s",
                      opacity: formVisible ? 1 : 0,
                    }}
                  >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#d99426" }}
              >
                Welcome to F.R.I.E.D
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#27292a" }}
              >
                Register Yourself!
              </Typography>
              <Box sx={{ mt: 4 }}>
                <TextField
                  id="name"
                  label="Name"
                  placeholder="Enter your name"
                  fullWidth
                  sx={{ width: "110" }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                  fullWidth
                  sx={{ width: "110" }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                  fullWidth
                  type="password"
                  sx={{ width: "110" }}
                />
              </Box>
              <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              transition: "opacity 0.5s",
              opacity: formVisible ? 0 : 1,
            }}
          >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#d99426" }}
              >
                Fill in your basic details
              </Typography>
              <Box sx={{ mt: 4 }}>
                <TextField
                  id="Date of Birth"
                  label="Date of Birth"
                  placeholder="Enter your Date of Birth"
                  fullWidth
                  sx={{ width: "110" }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  id="Height"
                  label="Height"
                  placeholder="Enter your Height"
                  fullWidth
                  sx={{ width: "110" }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  id="Weight"
                  label="Weight"
                  placeholder="Enter your Weight"
                  fullWidth
                  sx={{ width: "110" }}
                />
              </Box>
              <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  onClick={()=>{
                    navigate("/Card");
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}
          {/* <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#d99426" }}
          >
            Welcome to F.R.I.E.D
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#27292a" }}
          >
            Register Yourself!
          </Typography>
          <Box sx={{ mt: 4 }}>
            <TextField
              id="name"
              label="Name"
              placeholder="Enter your name"
              fullWidth
              sx={{ width: "110" }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <TextField
              id="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              sx={{ width: "110" }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <TextField
              id="password"
              label="Password"
              placeholder="Enter your password"
              fullWidth
              type="password"
              sx={{ width: "110" }}
            />
          </Box>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={handleNextClick}
            >
              Next
            </Button>
          </Box> */}
        {/* </Box> */}
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.5s",
          transform: formVisible ? "translateX(0)" : "translateX(-150%)",
        }}
      >
        {formVisible ? (
          <img
            src={img} // Replace with the path of the old image
            alt="Registration"
            style={{
              maxWidth: "100%",
              height: "45pc",
              boxShadow: "0px 2px 100px rgba(0, 0, 0, 0.5)",
              borderRadius: "20px",
            }}
          />
        ) : (
          <img
            src={img} // Replace with the path of the new image
            alt="Registration"
            style={{
              maxWidth: "100%",
              height: "45pc",
              boxShadow: "0px 2px 100px rgba(0, 0, 0, 0.5)",
              borderRadius: "20px",
            }}
          />
        )}
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
