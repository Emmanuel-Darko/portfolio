import React from 'react'
import CustomParticle from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
})

function Particles() {
    const classes = useStyles();
    return (
        <CustomParticle
            canvasClassName = {classes.particlesCanva}
            params={{
                "particles": {
                    "number": {
                        "value": 30
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    }
                }
            }}
        />
    )
}

export default Particles
