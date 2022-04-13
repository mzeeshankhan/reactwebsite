import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Post from './Post'
const useStyle = makeStyles((theme)=>({

  MainContainer:{
    paddingTop: theme.spacing(10),
  },

}));



const Feed = () => {
  const classes = useStyle();
  return (
    <Container className={classes.MainContainer}>
      <Post />
      <Post />
      <Post /><Post />
      
    </Container>
  )
}

export default Feed
