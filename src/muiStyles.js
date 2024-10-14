import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main : "#336389",
            light:"skyblue" 
        },
      
        
    },
    typography:{
        fontFamily : "Poppins,sans-serif",
        // fontFamily : "Montserrat,sans-serif",
        body2 : {
            color : "rgb(160, 174, 192)"
        },
        body1: {
            color: "white",  // White color for body1
          },
          h1: {
            color: "white",  // White color for h1
          },
          h2: {
            color: "white",  // White color for h2
          },
          h3: {
            color: "white",  // White color for h3
          },
          h4: {
            color: "white",  // White color for h4
          },
          h5: {
            color: "white",  // White color for h5
          },
          h6: {
            color: "white",  // White color for h6
          },
    },
    components:{
        MuiTableCell:{
            styleOverrides:{
                root:{
                    // textAlign : "center",
                  padding:"8px",
                  borderBottom:"0.0625rem solid rgb(45, 55, 72)",

                },
                
            }
        },
     
        MuiAvatarGroup:{
          styleOverrides:{
            root:{
              display:"flex",
              justifyContent:"left"
            }
          },
          
        },
        MuiAvatar:{
          styleOverrides:{
            root:{
              cursor:"pointer",
              transition: "transform 0.3s ease", // Optional, for smooth hover effect
              "&:hover": {
                zIndex:"1",
                transform: "scale(1.1)", // Example hover effect (scaling)
                backgroundColor: "#f0f0f0", // Change background color on hover
              },
            },           
          }
        },
        MuiListItem:{
          styleOverrides:{
            root:{
              padding:"8px"
            }
          }
        },
        // MUI TABS
        MuiTab: {
          styleOverrides: {
            root: {
              color: "white",
            },
            '&.Mui-selected': {  // Using the class for selected tabs
              borderRadius: "1rem",
              padding: ".5rem 3rem",
              background: "rgb(0 117 255)",
            },
          },
        },
       
        // MuiTextField: {
        //   styleOverrides: {
        //     root: {
              
        //       '& label.Mui-focused': {
        //         color: 'red', // placeholder styling
        //       },
        //       '& .MuiOutlinedInput-root': {
        //         '& fieldset': {
        //           borderColor: 'yellow', // field border
        //         },
        //         '&:hover fieldset': {
        //           borderColor: 'orange', // hover style
        //         },
        //         '&.Mui-focused fieldset': {
        //           borderColor: 'purple', // border style onFocus
        //         },
               
        //       },
        //     },
        //   },
        // },
       
    },
    
    
    
    
    
    
})