import {Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { margin } from '@mui/material/node_modules/@mui/system';

const useStyle = makeStyles((theme)=>({

  MainContainer:{
    paddingTop: theme.spacing(12),
    position:"sticky",
    top:0,
  },

  Title:{
    fontWeight: 500,
    fontSize:16,
    color: "#555",
  },

  ImageListItem:{},
  Link:{
    marginRight: theme.spacing(2),
    color:"#555",
    fontSize: 16,
  },

}));



const RightBar = () => {
  const classes = useStyle();
  return (
    <Container className={classes.MainContainer}>
      <Typography className={classes.Title} gutterBottom>Online Friend</Typography>
      <AvatarGroup max={6} style={{marginBottom:20}}>
  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/6.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
</AvatarGroup>
<Typography className={classes.Title} gutterBottom>Gallery</Typography>
  <ImageList rowHeight={120} className={classes.ImageListItem} style={{marginBottom:20}} cols={2}>
    <ImageListItem>
      <img  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
    </ImageListItem>

    <ImageListItem>
      <img  src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
    </ImageListItem>

    <ImageListItem>
      <img  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
    </ImageListItem>

    <ImageListItem>
      <img  src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format&dpr=2" alt="" />
    </ImageListItem>

    <ImageListItem>
      <img  src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=248&fit=crop&auto=format&dpr=2" alt="" />
    </ImageListItem>

    <ImageListItem>
      <img  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format&dpr=2" alt="" />
    </ImageListItem>
  </ImageList>
  <Typography className={classes.Title} gutterBottom>Categories</Typography>
  <Link href='#' className={classes.Link} variant="Body2">Kids</Link>
  <Link href='#' className={classes.Link} variant="Body2">Movies</Link>
  <Link href='#' className={classes.Link} variant="Body2">Games</Link>
  <Divider flexItem style={{marginBottom:5}} />
  <Link href='#' className={classes.Link} variant="Body2">Party</Link>
  <Link href='#' className={classes.Link} variant="Body2">Drive</Link>
  <Link href='#' className={classes.Link} variant="Body2">Gym</Link>
    </Container>
  )
}

export default RightBar
