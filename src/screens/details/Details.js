import React from 'react';
import Header from '../../common/header/Header';
import './Details.css'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from "react-router-dom";


const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


const styles = (theme) => ({
    card: {
        margin: '2%',
        width: '90%',
        padding: '10px',
      },
    cmpPosition: {
      margin: theme.spacing.unit,
      minWidth: '240px',
      maxWidth: '240px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 25,
      color: theme.palette.primary.light,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
    gridList: {
        width: 500,
        height: 450,
      },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    pos: {
      marginBottom: 12,
    },
    blackText: {
        color: '#000',
    },
    root: {
        display: "flex",
        flexDirection: "column",
    
        "& > * + *": {
          marginTop: theme.spacing.unit
        }
      },
      emptyStar: {
        color: "white"
      }
  });
  

  const movieData = {
          id: 0,
          title: "Inception",
          genres: "Action",
          duration: "140 Mins",
          release_date: "12 Aug 2022",
          critics_rating: 8.8,
          story_line: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious.",
          wiki_url: "https://en.wikipedia.org/wiki/Inception",
          trailer_url: "YoHD9XEInc0",
          poster_url: 'https://posterspy.com/wp-content/uploads/2020/09/inception-ricojr.png',
          artists: [
            {
                id: 0,
                profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q9tvih6sHPAEEbPoCRrWpf2IWVG5IOo5jIxqCA7dgrggsQO5",
                first_name: "Leonardo",
                last_name: "DiCaprio",
            },
            {
                id: 1,
                profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-syBjIjxL22k36P-LTRgzoLzHDb0Ls_9tTTidhkuXTKQMs2L6",
                first_name: "Marion",
                last_name: "Cotillard",
              },
          
        ]
      };
  

function Details(props){
    const { classes } = props;

    return(
        <React.Fragment>
            <Header></Header>
            
            {/* Back to Home Button */}
            <Toolbar position="static">
              <Link  to="/">
                  <Typography variant="h6" id='back-to-home-btn'> &lt; Back to Home</Typography>
              </Link>
            </Toolbar>
            
            <div id="wrapper">
                <div id="w20">  
                    <img src={movieData.poster_url} alt={movieData.title} id='poster-style' />
                </div>
                <div id="w60">  
                    <Typography  component="h2" className={classes.title} gutterBottom>
                        {movieData.title}
                    </Typography>
                    <Typography className={classes.color} gutterBottom>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Genre:</span>  {movieData.genres} 
                    </Typography>
                    <Typography className={classes.color} gutterBottom>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Duration:</span>  {movieData.duration} 
                    </Typography>
                    <Typography className={classes.color} gutterBottom>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Release Date:</span>  {movieData.release_date} 
                    </Typography>
                    <Typography className={classes.color} gutterBottom>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Rating:</span>  {movieData.critics_rating} 
                    </Typography>
                    <br/>
                    <Typography className={classes.color} gutterBottom>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Plot:</span> <a href={movieData.wiki_url}>(Wiki Link)</a>  {movieData.story_line} 
                    </Typography>
                    <br/>
                    <Typography className={classes.color} gutterBottom>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Trailer:</span> 
                    </Typography>
                    {/* <iframe src={movieData.trailer_url}
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                    /> */}
                    <YouTube videoId={movieData.trailer_url} opts={opts}/>
                </div>
                <div id="w20"> 
                    <Typography className={classes.color} gutterBottom>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Rate this movie:</span> 
                    </Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                
                    <br/>

                    <Typography className={classes.color} gutterBottom style={{marginTop: '16px'}}>
                        <span style={{fontWeight: 'bold', fontSize: '16px'}}>Artists:</span> 
                    </Typography>
                    <div className={classes.root}>
                    <GridList cellHeight={350} className={classes.gridList} cols={2}  style={{ width: '100%' }} spacing={25}>
                        {movieData.artists.map(artist => (
                        <GridListTile key={artist.id} className={classes.artistStyle}>
                            <img id='artist-style' src={artist.profile_url} alt={artist.first_name}/>
                            <GridListTileBar
                            title={`${artist.first_name} ${artist.last_name}`}
                            />
                        </GridListTile>
                        ))}
                    </GridList>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


Details.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Details);

