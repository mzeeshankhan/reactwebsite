import { Container, makeStyles, Typography, Box } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { breakpoints, flexbox } from '@mui/material/node_modules/@mui/system';
import { autocompleteClasses } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyle = makeStyles((theme)=>({

  MainContainer:{
    height:"100vh",
    color: "white",
    paddingTop: theme.spacing(12),   
    backgroundColor: theme.palette.primary.main,
    position:"sticky",
    top:0,
    [theme.breakpoints.up("sm")]:{
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    }
    

  },

  item:{
    display:"flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
      marginBottom: theme.spacing(3),
      cursor:"pointer",
    }

   },

   icon:{
     marginRight: theme.spacing(1),
     [theme.breakpoints.up("sm")]:{
       fontSize : "18px",
     }
   },

   text:{
     fontWeight: 500,
      [theme.breakpoints.down("sm")]:{
        display:"none",
      }
   },


}));



const LeftBar = () => {
  const classes = useStyle();
  return (
    <Container className={classes.MainContainer}>
      <div className={classes.item}>
        <HomeIcon  className={classes.icon}/>
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <SlowMotionVideoIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <AppSettingsAltIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <PermMediaIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <StoreIcon className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
      
    </Container>
  )
}

export default LeftBar
