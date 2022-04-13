import { Button, Container, makeStyles, Fab, Tooltip, Backdrop, Box, Modal, Fade, Typography, TextField, Menu, MenuItem, Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import MuiAlert from '@mui/material/Alert';




const useStyle = makeStyles((theme)=>({

  MainContainer:{
    paddingTop: theme.spacing(10),
    color: "#fff",
  },


  AddIconButton:{
   
   position: 'fixed',
   bottom: 16,
   right: 16,
   
  },


  ModelBox:{
      height:550,
      width:500,
      //backgroundColor:"#42ab7e",
      //backgroundImage: "linear-gradient(90deg, rgba(66,153,171,1) 42%, rgba(148,21,133,1) 100%)",
      color: "#fff",
      backgroundImage: "linear-gradient(90deg, rgba(66,171,126,0.7288049008665967) 4%, rgba(148,21,133,0.692390335040266) 96%)",
      position: "absolute",
      top: 0,
      bottom:0,
      left: 0,
      right:0,
      margin:"auto",
      [theme.breakpoints.down("sm")]:{
          height: "100vh",
          width: "100vh",
      }
  },




  ModelTextField:{
      size:"small",
      color: "#fff",
      
      marginTop: "10px",
      width: "100%",
      [theme.breakpoints.down("xs")]:{
            width:"45%",
            display:"flex",
            //right:10,
            //left:10,
            align:"center",
         }
    
  },

  ModelForm:{
    padding: theme.spacing(2),
    color: "#fff",
  },

  ModelItem:{
    marginBottom: 3,
    color: "#fff",
  },


  SubmitButton:{
    background:"#42ab7e",
    //backgroundImage: "linear-gradient(90deg, rgba(66,171,126,1) 0%, rgba(148,21,133,1) 100%)",
      color: "#fff",
  }

  

}));


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddPost = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  //Snakbar Start
  const [openAlert, setOpenAlert] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  //console.log({open});
  return (
      <>
    <Tooltip title="New Post" aria-label="add" onClick={()=> setOpen(true)}>
        <Fab color="primary" className={classes.AddIconButton}>
        <AddIcon/>
      </Fab>      
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.ModelBox}>
            <form className={classes.ModelForm} autoComplete="off">
                <div className={classes.ModelItem}>
                <TextField id="outlined-basic" label="Title" variant="outlined" className={classes.ModelTextField} />
                </div>

                <div className={classes.ModelItem}>
                <TextField id="outlined-multiline-static" label="Description" placeholder="Description"  multiline  rows={4} variant="outlined" className={classes.ModelTextField} />
                </div>

                <div className={classes.ModelItem}>
                    <TextField select label="Visiablity">
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="School">School</MenuItem>
                        <MenuItem value="Office">Office</MenuItem>
                    </TextField>

                </div>
                <div className={classes.ModelItem}>
                <RadioGroup>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>

                <div className={classes.ModelItem}>
                <Button variant="contained" className={classes.SubmitButton}  onClick={()=>setOpenAlert(true)} style={{marginRight: "20px"}}>Create</Button>
                <Button variant="contained" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
                </div>
            </form>
        </Container>
        </Modal>
        <Snackbar open={openAlert} autoHideDuration={4000} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
</Snackbar>
  </>
  )
}


export default AddPost
