import React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../images/avatar.png';

// Css styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem",
        fontWeight: "bold",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();
 
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Kode" /> 
            </Grid>
            <br/>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Kode"]} typeSpeed={40} />
            </Typography>    
            <br/><br/><br/><br/>
            <Typography  className={classes.subtitle} variant="h4">
                <Typed 
                    strings={["Web Design/Dev.", "MERN Stack", "E-commerce", "IoT"]}
                    typeSpeed={40} 
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header
