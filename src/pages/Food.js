// import React from "react";
// import { Box, Button, Card, Grid, Toolbar, Typography } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// const CardFood = () => {
//   return (
//     <Box>
//       <Toolbar>
//         <Button startIcon={<ArrowBackIcon />} color="inherit">
//           Back
//         </Button>
//       </Toolbar>
//       <Box display="flex" justifyContent="center" alignItems="center" margin={"50px"}>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12}>
//             <Typography variant="h5" align="start">
//             Select your desired <b> CUISINE</b> to continue.
//             </Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Card>
//               <Box p={2}>
//                 <Typography variant="h6">Card 1</Typography>
//                 <Typography variant="body2">
//                   This is the content of Card 1.
//                 </Typography>
//               </Box>
//             </Card>
//           </Grid>
//           <Grid item xs={4}>
//             <Card>
//               <Box p={2}>
//                 <Typography variant="h6">Card 2</Typography>
//                 <Typography variant="body2">
//                   This is the content of Card 2.
//                 </Typography>
//               </Box>
//             </Card>
//           </Grid>
//           <Grid item xs={4}>
//             <Card>
//               {/* Card content */}
//               <Box p={2}>
//                 <Typography variant="h6">Card 3</Typography>
//                 <Typography variant="body2">
//                   This is the content of Card 3.
//                 </Typography>
//               </Box>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default CardFood;
import React, { useState } from "react";
import { Box, Button, Card, Grid, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import img from "./Group5.png";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardFood = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (card) => {
    if (selectedCards.includes(card)) {
      setSelectedCards(selectedCards.filter((c) => c !== card));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const isCardSelected = (card) => {
    return selectedCards.includes(card);
  };

  return (
    <Box>
      <Toolbar>
        <Button startIcon={<ArrowBackIcon />} color="inherit">
          Back
        </Button>
      </Toolbar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin={"50px"}
        marginTop={"10px"}
      >
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="start">
              Select your desired <b>CUISINE</b> to continue.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Card
              onClick={() => handleCardClick("Card 1")}
              sx={{
                cursor: "pointer",
                backgroundColor: isCardSelected("Card 1")
                  ? "lightblue"
                  : "white",
                position: "relative",
                width: "20pc",
                margin: "0",
              }}
            >
              {isCardSelected("Card 1") && (
                <CheckIcon
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "green",
                    fontSize: 32,
                    border: "2px solid black",
                  }}
                />
              )}
              <img
                src={img}
                alt="Card 1"
                style={{ width: "100%", height: "22pc" }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              onClick={() => handleCardClick("Card 2")}
              sx={{
                cursor: "pointer",
                backgroundColor: isCardSelected("Card 2")
                  ? "lightblue"
                  : "white",
                position: "relative",
                width: "20pc",
              }}
            >
              {isCardSelected("Card 2") && (
                <CheckIcon
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "green",
                    fontSize: 32,
                    border: "2px solid black",
                  }}
                />
              )}
              <img
                src={img}
                alt="Card 2"
                style={{ width: "100%", height: "22pc" }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              onClick={() => handleCardClick("Card 3")}
              sx={{
                cursor: "pointer",
                backgroundColor: isCardSelected("Card 3")
                  ? "lightblue"
                  : "white",
                position: "relative",
                width: "20pc",
              }}
            >
              {isCardSelected("Card 3") && (
                <CheckIcon
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "green",
                    fontSize: 32,
                    border: "2px solid black",
                  }}
                />
              )}
              <img
                src={img}
                alt="Card 3"
                style={{ width: "100%", height: "22pc" }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              onClick={() => handleCardClick("Card 3")}
              sx={{
                cursor: "pointer",
                backgroundColor: isCardSelected("Card 3")
                  ? "lightblue"
                  : "white",
                position: "relative",
                width: "20pc",
              }}
            >
              {isCardSelected("Card 3") && (
                <CheckIcon
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "green",
                    fontSize: 32,
                    border: "2px solid black",
                  }}
                />
              )}
              <img
                src={img}
                alt="Card 3"
                style={{ width: "100%", height: "22pc" }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              onClick={() => handleCardClick("Card 3")}
              sx={{
                cursor: "pointer",
                backgroundColor: isCardSelected("Card 3")
                  ? "lightblue"
                  : "white",
                position: "relative",
                width: "20pc",
              }}
            >
              {isCardSelected("Card 3") && (
                <CheckIcon
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "green",
                    fontSize: 32,
                    border: "2px solid black",
                  }}
                />
              )}
              <img
                src={img}
                alt="Card 3"
                style={{ width: "100%", height: "22pc" }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              onClick={() => handleCardClick("Card 3")}
              sx={{
                cursor: "pointer",
                backgroundColor: isCardSelected("Card 3")
                  ? "lightblue"
                  : "white",
                position: "relative",
                width: "20pc",
              }}
            >
              {isCardSelected("Card 3") && (
                <CheckIcon
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "green",
                    fontSize: 32,
                    border: "2px solid black",
                  }}
                />
              )}
              <img
                src={img}
                alt="Card 3"
                style={{ width: "100%", height: "22pc" }}
              />
              
            </Card>

          </Grid>
          
        </Grid>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>
      </Box>
      </Box>

    </Box>
  );
};

export default CardFood;
