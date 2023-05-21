// import React from "react";
// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import { Dashboard, Search, Restaurant, Settings } from "@mui/icons-material";
// import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const NavigationBar = () => {
//   return (
//     <Box sx={{ display: "flex"}}>
//       <Drawer variant="permanent" anchor="left">
//         <Box sx={{ p: 2 }}>
//           <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//             F.R.I.E.D
//           </Typography>
//         </Box>
//         <List
//           sx={{
//             background: "rgba(19, 27, 41, 0.4)",
//             margin: "10px",
//             borderRadius: "20px",
//           }}
//         >
//           <ListItem
//             button
//             sx={{ flexDirection: "column", alignItems: "center" }}
//           >
//             <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
//               <DashboardOutlinedIcon />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard" style={{ color: "white" }} />
//           </ListItem>
//           <ListItem
//             button
//             sx={{ flexDirection: "column", alignItems: "center" }}
//           >
//             <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
//               <Search />
//             </ListItemIcon>
//             <ListItemText primary="Search" style={{ color: "white" }} />
//           </ListItem>
//         </List>
//         <Typography
//           variant="h6"
//           sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "center" }}
//         >
//           Your<br></br> Selections
//         </Typography>
//         <List
//           sx={{
//             background: "rgba(19, 27, 41, 0.4)",
//             margin: "10px",
//             borderRadius: "20px",
//             height: "100%",
//           }}
//         >
//           <ListItem
//             button
//             sx={{ flexDirection: "column", alignItems: "center" }}
//           >
//             <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
//               <Restaurant />
//             </ListItemIcon>
//             <ListItemText primary="Cuisines" style={{ color: "white" }} />
//           </ListItem>
//           <ListItem
//             button
//             sx={{ flexDirection: "column", alignItems: "center" }}
//           >
//             <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
//               <Settings />
//             </ListItemIcon>
//             <ListItemText primary="Settings" style={{ color: "white" }} />
//           </ListItem>

//           <ListItem
//             button
//             sx={{ flexDirection: "column", alignItems: "center",marginTop:"330%"}}
//           >
//             <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
//               <AccountCircleIcon fontSize="large"/>
//             </ListItemIcon>
//           </ListItem>
//         </List>
//       </Drawer>
//     </Box>
//   );
// };

// export default NavigationBar;
import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import { Dashboard, Search, Restaurant, Settings } from "@mui/icons-material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavigationBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" anchor="left">
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            F.R.I.E.D
          </Typography>
        </Box>
        <List
          sx={{
            background: "rgba(19, 27, 41, 0.4)",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <ListItem
            button
            sx={{ flexDirection: "column", alignItems: "center" }}
          >
            <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "white" }} />
          </ListItem>
          <ListItem
            button
            sx={{ flexDirection: "column", alignItems: "center" }}
          >
            <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Search" style={{ color: "white" }} />
          </ListItem>
        </List>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "center" }}
        >
          Your
          <br />
          Selections
        </Typography>
        <List
          sx={{
            background: "rgba(19, 27, 41, 0.4)",
            margin: "10px",
            borderRadius: "20px",
            height: "100%",
          }}
        >
          <ListItem
            button
            sx={{ flexDirection: "column", alignItems: "center" }}
          >
            <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
              <Restaurant />
            </ListItemIcon>
            <ListItemText primary="Cuisines" style={{ color: "white" }} />
          </ListItem>
          <ListItem
            button
            sx={{ flexDirection: "column", alignItems: "center" }}
          >
            <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" style={{ color: "white" }} />
          </ListItem>
          <ListItem
            button
            sx={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: "330%",
            }}
          >
            <ListItemIcon sx={{ justifyContent: "center", color: "white" }}>
              <AccountCircleIcon fontSize="large" />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <Box>
        <Box sx={{ flexGrow: 1, p: 20, pt: 5, pb: 0 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to F.R.I.E.D!
          </Typography>
          <Typography variant="body1">
            This is the home page of the F.R.I.E.D application. You can navigate
            through the different sections using the left navigation menu.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(19, 27, 41, 0.4)",
            margin: "10px",
            borderRadius: "20px",
            display: "grid",
            marginLeft:"150px",
            p:2,
            mt:"50px"
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Your Condition based on your selection
          </Typography>
          <Box sx={{ display: "flex", justifyContent:"space-around"}}>
            <Button variant="contained" color="primary">
              Button 1
            </Button>
            <Button variant="contained" color="secondary">
              Button 2
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationBar;
