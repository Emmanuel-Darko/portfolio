import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {PictureAsPdf} from "@material-ui/icons";
import {
    Box,
    Typography,
    Button,
    Modal,
    Input
} from "@material-ui/core";
// import Navbar from "./Navbar";

//Modal functions
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
//End Modal functions

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
        marginTop: "50px"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        // border: "1px solid red",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        },
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float:"right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
                // display: "none"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
        [theme.breakpoints.down("md")]: {
            fontSize: "25px"
        }
    },
    subHeading: {
        color: "white",
        padding: "0",
        // textTransform: "uppercase"
    },
    button: {
        padding: "5px",
        boxShadow: " 5px 15px 20px -8px black",
        width: "auto",
        margin: "auto auto 30px auto",
        border: "1px solid tomato",
        color: "white",
        textTransform: "Capitalize",
        '&:hover':{
            boxShadow: "none"
        }
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

function Resume() {
    const classes = useStyles();
    
    //Modal States
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [codeVerify, setCode] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = e => {
        if(e.target.value === '@kode@')
            setCode(true);
        else
            setCode(false);
    }
    //End Modal States

    const body = (
        <div style={{modalStyle}} className={classes.paper}>
          <h2 id="simple-modal-title">Enter Code to download</h2>
          <p id="simple-modal-description">
            <Input placeholder="Code goes here..." onChange={e=>handleChange(e)}/>
            <br/><br/><br/>
            {codeVerify &&
                <div>
                    <Button
                        className={classes.button} 
                        style={{marginBottom:"0",color:"red"}}
                        endIcon={<PictureAsPdf/>}
                        // href="/pdf/cv"
                        href="https://drive.google.com/file/d/1YXxRhQ4RmxTBXXG93PSemjvMqMHtPPSw/view?usp=sharing"
                        target="_blank"
                    >
                        CV
                    </Button> &emsp;
                    <Button 
                        className={classes.button} 
                        style={{marginBottom:"0",color:"red"}}
                        endIcon={<PictureAsPdf/>}
                        // href="/pdf/resume"
                        href="https://drive.google.com/file/d/1o_dqk8eJGXjxqCE681YeENLFEoASLH0-/view?usp=sharing"
                        target="_blank"
                    >
                        Resume
                    </Button>
                </div>
            }
          </p>
        </div>
    );

    return (
        <>
            {/* <Navbar/> */}

            <Box 
                component="header"
                className={classes.mainContainer}
            >
                <Typography variant="h4" align="center" className={classes.heading} >
                    Working experience
                </Typography>
                <Box style={{textAlign:"center"}}>
                    <Button className={classes.button} onClick={handleOpen}>
                        <Typography>Download  CV/Resume &ensp; </Typography>
                        <PictureAsPdf style={{color:"red"}}/>
                    </Button>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
                <Box component="div" className={classes.timeLine}>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2016
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            Web design - HTML/CSS/JS
                        </Typography>
                        <Typography variant="body1" align="left" style={{color: "tomato"}}>
                            @Sarps Creations, @Havens Health Care
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                            As I began my journey in web development and design, I needed to make dedicated time to grasp the concept and functionality of the whole design proceess.
                            I began with HTML/CSS/JS. I also needed a platform to actually build a real world solution so I opted to create a website for Sarps Creation, an avenue to test my skills.
                            I also built a modern healthcare website for Haven Health Care Services.
                        </Typography>
                    </Box>
                
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            NodeJs fullstack/MySQL /MongoDB
                        </Typography>
                        <Typography variant="body1" align="left" style={{color: "tomato"}}>
                            @Eternics, @Church Management
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                           After a firm foundation in HMTL/CSS/JS, I needed to improve by adding backend servers and databases to my frontend skills. I began with Node JS, a javascript runtime library,
                           followed by MYSQL database and MONGO database. I worked at Eternics Electronics and with my skills built a Digital Signage system for one of its client(Total Ghana).
                           I also built a fully fledged Church Management System for my fellowship at school and church at home though they were never launched online.
                        </Typography>
                    </Box>

                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            IoT - Arduino
                        </Typography>
                        <Typography variant="body1" align="left" style={{color: "tomato"}}>
                            @Kumasi Hive
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                            Due to my background as a Computer Engineer, I needed to be well abreast with both hardware and software advancements. I took a bootcamp training on Internet of Things (IoT) at the Kumasi Hive.
                            The knowledge and skills I gained helped me to build personal cool stuff like a smart Vehicle Traffic System, a smart Home where you can virtually controll everything in the house from your phone, and many other.
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            Candle Designs
                        </Typography>
                        <Typography variant="body1" align="left" style={{color: "tomato"}}>
                            @Candle Technologies
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                            Later 2018, my friend namely Marvin and I co-founded Candle Technologies where we designed and produced custom lighted plaques called 'Candle'.
                            The business made use of the knowledge we had acquired in our various Engineering fields and the IoT bootcamp we undertook at Kumasi Hive.
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            React/Redux
                        </Typography>
                        <Typography variant="body1" align="left" style={{color: "tomato"}}>
                            @Kode Solutions.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                            In 2019, I began to learn and master other Javascript frameworks such as React/Redux. Though I had learnt it earlier, I did it this time with passion and all seriousness.
                            I have created a number of personal projects with this.
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            MERN Stack
                        </Typography>
                        <Typography variant="body1" align="left" style={{color: "tomato"}}>
                            @Kode Solutions.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                            Fast track 2020, I dived into MERN Stack. MERN denotes Mongo, Express, React, NodeJs. This was a new technology of building a complete fully functional application.
                            With MERN, I was able to build some cool project and the upcoming project is an ecommerce app with MERN Stack.
                        </Typography>
                    </Box>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            WordPress/Joomla/ Shopify
                        </Typography>
                        <Typography variant="body1" align="left" style={{color: "tomato"}}>
                            @Kode Solutions.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                            Apart from my development/programming background, I learnt how to use Wordpress,Joomla,Shopify to build scalable applications. Chief amongst them is the E-commerce site I created for Orix Trade.
                            I also created a School Management System with some customized plugins and other websites.<br/>
                            <b>I create professional web applications using Wordpress with customized scripts and codes.</b>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume

