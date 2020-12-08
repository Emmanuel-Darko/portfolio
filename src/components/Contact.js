import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import {makeStyles, responsiveFontSizes, withStyles} from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  CircularProgress
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
// import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
  heading: {
    color: "tomato",
    // padding: "3rem 0",
    textAlign: "center",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px"
    }
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      width: "70%"
    }
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato"
  },
  loader: {
    color: "tomato",
    textAlign: "center",
    left: "43%",
    // transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  success: {
    width:"50%", 
    float:"right", 
    background:"c4ffd8", 
    color:"black", 
    fontWeight:"bold",
    position:"relative",
    marginBottom:"50px",
    // transition:"ease-in-out",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      padding: "2px"
    }
  }
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan"
      },
      "&:hover fieldset": {
        borderColor: "tan"
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan"
      }
    }
  }
})(TextField);


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoader(true);

    // Simple validation
    if(name!=='' && email!=='' && message!==''){
      sendEmail(e);
      setError(false);
    }
    else{
      setError(true);
    }
  }

  const sendEmail = (e) => {

    emailjs.sendForm('user_sKGK6AE6gUYr2ZssS2l', 'template_fgcq2hm', e.target, 'user_sKGK6AE6gUYr2ZssS2la8')
    .then((result) => {
      setSuccess(true)
      setLoader(false)
    }, (error) => {
        console.log(error.text);
    });
  }

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setLoader(false);
    setSuccess(false);
    setError(false);
  }
    
  const classes = useStyles();
  return (
    <Box component="div" style={{background:"#233", height:"100vh"}}>
      {/* <Navbar /> */}
      {
        success &&
        <>
          <Alert severity="success" className={classes.success}>
            <AlertTitle>Hi {name}, <br/> Your message has been sent. <b/> We'll get back to you.</AlertTitle>
          </Alert>
        </>
      }
      <Grid container justify="center" style={{width: "auto"}}>
        <Box component="form" className={classes.form} onSubmit={ onSubmitHandler }>
          <Typography variant="h5" className={classes.heading}>
            hire or contact me
          </Typography>
          {
            error &&
              <>
                <br/>
                <Alert severity="error">
                  <AlertTitle>Please check all inputs</AlertTitle>
                </Alert> 
              </>
          }
          <InputField 
            name="name"
            type="text"
            fullWidth={true}
            label="Name/Company" 
            variant="outlined"
            inputProps={{ style: {color:"white"} }}
            margin="dense" 
            size="medium"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <br/>
          <InputField
            name="email"
            type="email"
            fullWidth={true} 
            label="Email" 
            variant="outlined" 
            inputProps={{ style: {color:"white"} }}
            margin="dense" 
            size="medium"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <br/>
          <InputField
            name="message"
            type="text"
            fullWidth={true} 
            label="Message" 
            variant="outlined" 
            inputProps={{ style: {color:"white"} }}
            margin="dense" 
            size="medium"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          <br/>
          {loader && <CircularProgress size={24} className={classes.loader}/>}
          <br/>
          <Button 
            className={classes.button} 
            variant="outlined" 
            fullWidth={true} 
            endIcon={<SendIcon/>}
            type="submit"
          >
            contact me
          </Button>
          <br/>
          <Button
            type="button"
            onClick={()=>reset()}
          >
            reset
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;
