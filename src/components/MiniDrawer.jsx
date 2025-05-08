// // import FlagIcon from "@mui/icons-material/Flag";
// // import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// // import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// // import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// // import LogoutIcon from "@mui/icons-material/Logout";
// // import HelpIcon from "@mui/icons-material/Help";
// // import logo from "../assets/logo.svg";
// // import Overview from "../assets/overview.svg"; // استيراد الصورة كـ URL
// // import { useState } from "react";
// // import { Box } from "@mui/material";
// // import { CssBaseline } from "@mui/material";
// // import { Drawer, AppBar, Toolbar, Typography } from "@mui/material";

// // const drawerWidthOpen = 240;
// // const drawerWidthClosed = 60;

// // const MiniDrawer = ({ children }) => {
// //   const [open, setOpen] = useState(true); // start open if you want

// //   const toggleDrawer = () => {
// //     setOpen(!open);
// //   };

// //   const navItems = [
// //     { text: "Overview", icon: <Overview /> },
// //     { text: "Goals", icon: <FlagIcon /> },
// //     { text: "Activity", icon: <DirectionsRunIcon /> },
// //     { text: "Diet Plan", icon: <RestaurantMenuIcon /> },
// //     { text: "Workout", icon: <FitnessCenterIcon /> },
// //   ];

// //   const bottomItems = [
// //     { text: "Help", icon: <HelpIcon /> },
// //     { text: "Logout", icon: <LogoutIcon /> },
// //   ];

// //   return (
// //     <Box sx={{ display: "flex" }}>
// //       <CssBaseline />

// //       {/* Top Left Toggle Button */}
// //       <IconButton
// //         onClick={toggleDrawer}
// //         sx={{
// //           position: "fixed",
// //           top: 16,
// //           left: 10,
// //           zIndex: 1301,
// //           bgcolor: "white",
// //           boxShadow: 2,
// //           "&:hover": {
// //             backgroundColor: "#4C8050",
// //             color: "#fff",
// //           },
// //         }}
// //       >
// //         <MenuIcon />
// //       </IconButton>

// //       {/* Permanent Drawer */}
// //       <Drawer
// //         variant="permanent"
// //         sx={{
// //           width: open ? drawerWidthOpen : drawerWidthClosed,
// //           flexShrink: 0,
// //           "& .MuiDrawer-paper": {
// //             width: open ? drawerWidthOpen : drawerWidthClosed,
// //             transition: "width 0.3s",
// //             overflowX: "hidden",
// //             boxSizing: "border-box",
// //           },
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             height: "100%",
// //           }}
// //         >
// //           {/* Logo */}
// //           <Box
// //             sx={{
// //               height: 64,
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             {open && (
// //               <Typography
// //                 variant="h6"
// //                 noWrap
// //                 className=" !font-bold !text-2xl  bg-gradient-to-r from-[#1D1D1D] via-[#7C9E7F] to-[#1D1D1D] bg-clip-text text-transparent !mt-3 "
// //               >
// //                 LifeFit
// //                 <img src={logo} className="inline !p-2" />
// //               </Typography>
// //             )}
// //           </Box>

// //           <Divider />

// //           {/* Top Nav Items */}
// //           <List sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
// //             {navItems.map((item) => (
// //               <Tooltip
// //                 key={item.text}
// //                 title={!open ? item.text : ""}
// //                 placement="right"
// //               >
// //                 <ListItem
// //                   button
// //                   sx={{
// //                     justifyContent: open ? "initial" : "center",
// //                     px: 2.5,
// //                     "&:hover": {
// //                       backgroundColor: "#4C8050",
// //                       color: "#fff",
// //                       borderRadius: "8px",
// //                     },
// //                   }}
// //                 >
// //                   <ListItemIcon
// //                     sx={{
// //                       minWidth: 0,
// //                       mr: open ? 2 : "auto",
// //                       justifyContent: "center",
// //                     }}
// //                   >
// //                     {item.icon}
// //                   </ListItemIcon>
// //                   {open && <ListItemText primary={item.text} />}
// //                 </ListItem>
// //               </Tooltip>
// //             ))}
// //           </List>

// //           <Box sx={{ flexGrow: 1 }} />
// //           <Divider />

// //           {/* Bottom Items */}
// //           <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
// //             {bottomItems.map((item) => (
// //               <Tooltip
// //                 key={item.text}
// //                 title={!open ? item.text : ""}
// //                 placement="right"
// //               >
// //                 <ListItem
// //                   button
// //                   sx={{
// //                     justifyContent: open ? "initial" : "center",
// //                     px: 2.5,
// //                     "&:hover": {
// //                       backgroundColor: "#4C8050",
// //                       color: "#fff",
// //                       borderRadius: "8px",
// //                     },
// //                   }}
// //                 >
// //                   <ListItemIcon
// //                     sx={{
// //                       minWidth: 0,
// //                       mr: open ? 2 : "auto",
// //                       justifyContent: "center",
// //                     }}
// //                   >
// //                     {item.icon}
// //                   </ListItemIcon>
// //                   {open && <ListItemText primary={item.text} />}
// //                 </ListItem>
// //               </Tooltip>
// //             ))}
// //           </List>
// //         </Box>
// //       </Drawer>

// //       {/* Main Content */}
// //       <Box
// //         component="main"
// //         sx={{
// //           flexGrow: 1,
// //           p: 0,
// //           // marginLeft: open ? ${drawerWidthOpen}px : ${drawerWidthClosed}px,
// //           transition: "margin-left 0.3s",
// //         }}
// //       >
// //         {children}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default MiniDrawer;
// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   Typography,
//   IconButton,
//   Divider,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Box,
//   CssBaseline,
//   Tooltip,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import FlagIcon from "@mui/icons-material/Flag";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import LogoutIcon from "@mui/icons-material/Logout";
// import HelpIcon from "@mui/icons-material/Help";

// const drawerWidthOpen = 240;
// const drawerWidthClosed = 60;

// const MiniDrawer = ({ children }) => {
//   const [open, setOpen] = useState(true); // start open if you want

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   const navItems = [
//     { text: "Overview", icon: <DashboardIcon /> },
//     { text: "Goals", icon: <FlagIcon /> },
//     { text: "Activity", icon: <DirectionsRunIcon /> },
//     { text: "Diet Plan", icon: <RestaurantMenuIcon /> },
//     { text: "Workout", icon: <FitnessCenterIcon /> },
//   ];

//   const bottomItems = [
//     { text: "Help", icon: <HelpIcon /> },
//     { text: "Logout", icon: <LogoutIcon /> },
//   ];

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Top Left Toggle Button */}
//       <IconButton
//         onClick={toggleDrawer}
//         sx={{
//           position: "fixed",
//           top: 16,
//           left: 16,
//           zIndex: 1301,
//           bgcolor: "white",
//           boxShadow: 2,
//           "&:hover": {
//             backgroundColor: "#4C8050",
//             color: "#fff",
//           },
//         }}
//       >
//         <MenuIcon />
//       </IconButton>

//       {/* Permanent Drawer */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: open ? drawerWidthOpen : drawerWidthClosed,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: open ? drawerWidthOpen : drawerWidthClosed,
//             transition: "width 0.3s",
//             overflowX: "hidden",
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//           }}
//         >
//           {/* Logo */}
//           <Box
//             sx={{
//               height: 64,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {open && (
//               <Typography variant="h6" noWrap>
//                 LifeFit
//               </Typography>
//             )}
//           </Box>

//           <Divider />

//           {/* Top Nav Items */}
//           <List>
//             {navItems.map((item) => (
//               <Tooltip
//                 key={item.text}
//                 title={!open ? item.text : ""}
//                 placement="right"
//               >
//                 <ListItem
//                   button
//                   sx={{
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                     "&:hover": {
//                       backgroundColor: "#4C8050",
//                       color: "#fff",
//                       borderRadius: "8px",
//                     },
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 2 : "auto",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {item.icon}
//                   </ListItemIcon>
//                   {open && <ListItemText primary={item.text} />}
//                 </ListItem>
//               </Tooltip>
//             ))}
//           </List>

//           <Box sx={{ flexGrow: 1 }} />
//           <Divider />

//           {/* Bottom Items */}
//           <List>
//             {bottomItems.map((item) => (
//               <Tooltip
//                 key={item.text}
//                 title={!open ? item.text : ""}
//                 placement="right"
//               >
//                 <ListItem
//                   button
//                   sx={{
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                     "&:hover": {
//                       backgroundColor: "#4C8050",
//                       color: "#fff",
//                       borderRadius: "8px",
//                     },
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 2 : "auto",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {item.icon}
//                   </ListItemIcon>
//                   {open && <ListItemText primary={item.text} />}
//                 </ListItem>
//               </Tooltip>
//             ))}
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
//           transition: "margin-left 0.3s",
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default MiniDrawer;
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Drawer,
  List,
  Typography,
  IconButton,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FlagIcon from "@mui/icons-material/Flag";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import logo from "../assets/logo.svg"; // استيراد الصورة

const drawerWidthOpen = 240;
const drawerWidthClosed = 60;

const MiniDrawer = ({ children }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate(); // ← تم نقل useNavigate هنا

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navItems = [
    { text: "Overview", icon: <DashboardIcon />, path: "/overview" },
    { text: "Goals", icon: <FlagIcon />, path: "/goals" },
    { text: "Activity", icon: <DirectionsRunIcon />, path: "/activity" },
    // { text: "Diet Plan", icon: <RestaurantMenuIcon />, path: "/diet-plan" },
    { text: "BMI", icon: <RestaurantMenuIcon />, path: "/bmi" },

    { text: "Workout", icon: <FitnessCenterIcon />, path: "/workout" },
  ];

  const bottomItems = [
    { text: "Help", icon: <HelpIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Left Toggle Button */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 16,
          left: 10,
          zIndex: 1301,
          bgcolor: "white",
          boxShadow: 2,
          "&:hover": {
            backgroundColor: "#4C8050",
            color: "#fff",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidthOpen : drawerWidthClosed,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidthOpen : drawerWidthClosed,
            transition: "width 0.3s",
            overflowX: "hidden",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Logo */}
          <Box
            sx={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {open && (
              <Typography
                variant="h6"
                noWrap
                className=" !font-bold !text-2xl  bg-gradient-to-r from-[#1D1D1D] via-[#7C9E7F] to-[#1D1D1D] bg-clip-text text-transparent !mt-3 "
              >
                LifeFit
                <img src={logo} className="inline !p-2" />
              </Typography>
            )}
          </Box>

          <Divider />

          {/* Top Nav Items */}
          <List sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {navItems.map((item) => (
              <Tooltip
                key={item.text}
                title={!open ? item.text : ""}
                placement="right"
              >
                <ListItem
                  button
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#4C8050",
                      color: "#fff",
                      borderRadius: "8px",
                      transform: "scale(1.02)",
                    },
                  }}
                  onClick={() => navigate(item.path)} // ← التنقل هنا
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={item.text} />}
                </ListItem>
              </Tooltip>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }} />
          <Divider />

          {/* Bottom Items */}
          <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {bottomItems.map((item) => (
              <Tooltip
                key={item.text}
                title={!open ? item.text : ""}
                placement="right"
              >
                <ListItem
                  button
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#4C8050",
                      color: "#fff",
                      borderRadius: "8px",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={item.text} />}
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          transition: "margin-left 0.3s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MiniDrawer;
