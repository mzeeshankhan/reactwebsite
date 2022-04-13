import { Button, Card, CardActionArea, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import CardActions from '@mui/material/CardActions';
import Slider from './Slider';

const useStyle = makeStyles((theme)=>({

  MainContainer:{
    paddingTop: theme.spacing(10),
  },


  CardImageMedia:{
    //padding:theme.spacing(2),
    //margin: "0px 0px 2px 2px",
    width: "auto",
    //maxWidth : "auto",
    height:"400px",
    [theme.breakpoints.down("sm")]:{
        height:"150px",
    }
  },

  Card:{
      marginBottom: theme.spacing(5),
  }

}));



const Post = () => {
  const classes = useStyle();
  return (
    <>
    <Slider />
    <Card className={classes.Card}>
      
      <CardActionArea>
          <CardMedia 
          className={classes.CardImageMedia}
          image="https://wallpapercave.com/wp/wp3202017.jpg"
          title="My Post"/>
          <CardContent>
             <Typography gutterBottom variant="h5">My First Post</Typography>
             <Typography variant="body2" align="justify">
             Lorem pecies, ranging across all continents except AntarcticaIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                 Lorem pecies, ranging across all continents except AntarcticaIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</Typography>
          </CardContent>
      </CardActionArea>
      <CardActionArea>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="secondary">Follow</Button>
      </CardActionArea>
    </Card>



    <Card className={classes.Card}>
      
      <CardActionArea>
          <CardMedia 
          className={classes.CardImageMedia}
          image="https://wallpapercave.com/wp/wp3202017.jpg"
          title="My Post"/>
          <CardContent>
             <Typography gutterBottom variant="h5">My First Post</Typography>
             <Typography variant="body2" align="justify">
             Lorem pecies, ranging across all continents except AntarcticaIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                 Lorem pecies, ranging across all continents except AntarcticaIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</Typography>
          </CardContent>
      </CardActionArea>
      <CardActionArea>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="secondary">Follow</Button>
      </CardActionArea>
    </Card>



    <Card className={classes.Card}>
      
      <CardActionArea>
          <CardMedia 
          className={classes.CardImageMedia}
          image="https://wallpapercave.com/wp/wp3202017.jpg"
          title="My Post"/>
          <CardContent>
             <Typography gutterBottom variant="h5">My First Post</Typography>
             <Typography variant="body2" align="justify">
             Lorem pecies, ranging across all continents except AntarcticaIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                 Lorem pecies, ranging across all continents except AntarcticaIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</Typography>
          </CardContent>
      </CardActionArea>
      <CardActionArea>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="secondary">Follow</Button>
      </CardActionArea>
    </Card>
    </>
  )
}

export default Post
