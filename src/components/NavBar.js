import { Box, alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Cancel, NoEncryption, Notifications, Search } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';

import SearchIcon from '@mui/icons-material/Search';
import { flexbox } from '@mui/material/node_modules/@mui/system';


import React, { useState } from 'react';

const useStyle = makeStyles((theme)=>({

    ToolBar:{
        height: "80px",
        display:"flex",
        justifyContent:"space-between",
        backgroundImage: "linear-gradient(90deg, rgba(66,171,126,1) 0%, rgba(148,21,133,1) 100%)",
    },

    LogoLongScr:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display: "block",
        },//AGAR SCreen small size ya small size sa zada ho jai to ya logo hide ho jai
    },


    LogoSmallScr:{
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none",//AGAR SCreen medium size ya medium size sa kam ho jai to ya logo hide ho jai
        },
    },
    


    SearchBox:{
      display:"flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
       backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
      borderRadius:theme.shape.borderRadius,
      width:"50%",
      [theme.breakpoints.down("sm")]:{
        display: (props)=> (props.open ? "flex" : "none"), //agar props pas ho to ya ho : wrna ya ho
        width: "70%", 
         
      },
     
    },

    

    SearchInput:{
      color:"white",
      marginLeft: theme.spacing(1),
      
    },


    SearchButton:{
      marginRight: theme.spacing(2),
      display: "block",
      [theme.breakpoints.up("sm")]:{
          display: "none",//AGAR SCreen medium size ya medium size sa kam ho jai to ya logo hide ho jai
      },
  },

   
  CancelButton:{
    marginRight: theme.spacing(1),
    
    [theme.breakpoints.up("sm")]:{
      display: "none",
    }
  },

    Icon:{     
      alignItems: "center",
      display: (props)=> (props.open ? "none" : "flex"), //agar props pas ho to ya ho : wrna ya ho
    },



    badge:{
      marginRight:theme.spacing(2),
    },




         

   

  

}));



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.ToolBar}>
          <Typography variant='h6' className={classes.LogoLongScr}>ZEETech Solutions</Typography>
          <Typography variant='h6'className={classes.LogoSmallScr}>ZEETECH</Typography>
      
      <div className={classes.SearchBox}>
        <Search />
        <InputBase placeholder="Search.." className={classes.SearchInput}></InputBase>
        <Box className={classes.CancelButton}>
        <Cancel onClick={()=>setOpen(false)} /></Box>
        </div>
        <div className={classes.Icon}>
        <Box className={classes.SearchButton}>
          <SearchIcon 
           onClick={()=>setOpen(true)}
          /></Box>
        <Badge badgeContent={4} color="secondary" className={classes.badge}>
         <MailIcon />
         </Badge>
         <Badge badgeContent={2} color="secondary" className={classes.badge}>
         <Notifications />
         </Badge>
         <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
        </div>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar
