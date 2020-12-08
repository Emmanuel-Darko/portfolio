import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
// import Navbar from './Navbar';
import health from '../images/undraw_medicine_b1ol_(2).svg';
import church from '../images/undraw_compose_music_ovo2.svg';
import school from '../images/undraw_back_to_school_inwc_(1).svg';
import commerce from '../images/undraw_add_to_cart_vkjp_(1).svg';
import shop from '../images/undraw_shopping_app_flsj_(1).svg';

const useStyles = makeStyles(theme =>({
    mainContainer: {
        background: "#233",
        height: "100%",
        marginTop: "50px",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto",
        [theme.breakpoints.down("sm")]:{
            maxWidth: "80%"
        }
    }
}))

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            {/* <Navbar/> */}
            <Grid container justify="center">
                {/* project1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="150"
                                image={health}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Haven Healthcare
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Adipisicing aliqua nisi nulla pariatur dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* project2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="150"
                                image={church}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Church Management
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Adipisicing aliqua nisi nulla pariatur dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* project3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="150"
                                image={school}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    School Management
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Adipisicing aliqua nisi nulla pariatur dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary" href="http://school-ms.great-site.net" target="_blank">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* project4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 4"
                                height="150"
                                image={commerce}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    E-commerce
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Adipisicing aliqua nisi nulla pariatur dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary" href="http://home.orix.42web.io" target="_blank">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* project5 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 5"
                                height="150"
                                image={shop}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Shopping List
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Adipisicing aliqua nisi nulla pariatur dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt dolore ipsum. Dolor fugiat reprehenderit ex adipisicing incididunt.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary" href="https://kode-mern-cart.herokuapp.com/" target="_blank">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
