import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from '@material-ui/core'
// import tileData from './tileData';
import image from '../images/avatar.png';
import Navbar from './Navbar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fff9c4',
    padding: '0.5rem'
  },
  gridList: {
    // width: 500,
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

 
const tileData = [
{
    img: image,
    title: 'Iphone 12',
    author: 'author',
},
{
    img: image,
    title: 'S20 Ultra',
    author: 'author',
},
{
    img: image,
    title: 'LG G9',
    author: 'author',
},
{
    img: image,
    title: 'One plus 8',
    author: 'author',
},
{
    img: image,
    title: 'Huawei P30 pro',
    author: 'author',
},
{
    img: image,
    title: 'Pixel 4',
    author: 'author',
},
{
    img: image,
    title: 'Tecno Camon 15',
    author: 'author',
},
{
    img: image,
    title: 'Macbook pro 2020',
    author: 'author',
},
{
    img: image,
    title: 'Hp Spectre',
    author: 'author',
},
{
    img: image,
    title: 'Alexa',
    author: 'author',
},
];

function TitlebarGridList() {
  const classes = useStyles();

  return (
    <>
    <Navbar />

    <div className={classes.root}>
      <Typography variant="h5" style={{color: "tan"}}> Products </Typography>
      <Grid container spacing={1}>
        <br/>
        {tileData.map((tile) => (
          <Grid item xs={6} sm={4} md={3} key={tile.title}>
            <GridListTile key={tile.title} style={{boxShadow: '0 10px 10px -5px'}}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={e=> console.log('clicked')}>
                    <CartIcon/>
                  </IconButton>
                }
              />
            </GridListTile>
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
}

export default TitlebarGridList;