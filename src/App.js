import { container, Grid, makeStyles } from '@material-ui/core';

import React from 'react';
import LeftBar from './components/LeftBar';
import NavBar from './components/NavBar';
import RightBar from './components/RightBar';
import Feed from './components/Feed';
import AddPost from './components/AddPost';

const useStyle = makeStyles((theme)=>({
  
  FullPage:{
     //background: "purple", 
     height:"100vh",   
     margin: theme.spacing(-1),
  },

  HideRightBar:{
    [theme.breakpoints.down("sm")]:{
      display: "none",
    },
  },




}));



const App = () => {
  const classes = useStyle();
  return (
    <div  className={classes.FullPage}>
      <NavBar/>
       <Grid container>
        <Grid item sm={2} xs={2}><LeftBar /></Grid>
        <Grid item sm={7} xs={8}><Feed /></Grid>
        <Grid item sm={3} className={classes.HideRightBar}><RightBar /></Grid>
        
        </Grid> 
      <AddPost />
    </div>
  )
}

export default App
