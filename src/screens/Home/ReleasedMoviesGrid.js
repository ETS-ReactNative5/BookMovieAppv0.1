import React, {useState} from 'react';
import './ReleasedMoviesGrid.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
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
  });

export function ReleasedMoviesGrid(props) {
    const { classes } = props;

    const [posterData, setPosterData] = useState([
        {
            id: 0,
            title: '1917',
            poster_url: 'https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_WW1_Epic_-_Hollywood_War_Film_Classic_English_Movie_Poster_94e5102a-f2f9-432f-9dfe-a108ff4b9f53.jpg?v=1582781208',
            release_date: 'Fri Aug 11 2017'
        },
        {
          id: 1,
          title: 'X-MEN',
          poster_url: 'https://webneel.net/file/images/11-16/8-xmen-movie-poster-design.jpg',
          release_date: 'Fri Jul 12 2017'
      },
      {
          id: 2,
          title: 'TRANQUILITY of Blood',
          poster_url: 'https://i.pinimg.com/originals/42/75/01/42750115d68a876558e7e0115b6600c8.jpg',
          release_date: 'Sat Dec 11 2019'
      },
      {
          id: 3,
          title: 'Jurassic Park',
          poster_url: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Jurassic_Park_-_Tallenge_Hollywood_Movie_Poster_Collection_745d5009-8298-4bf9-9efa-fd77fd18131a.jpg?v=1577693343',
          release_date: 'Mon Jan 11 2015'
      },
      {
          id: 4,
          title: 'AVATAR',
          poster_url: 'https://wallpaperaccess.com/full/1076854.jpg',
          release_date: 'Wed Oct 15 2017'
      },
      {
          id: 5,
          title: 'DOWNTOWN ABBEY',
          poster_url: 'https://preview.redd.it/atyf1poo8oe31.jpg?auto=webp&s=d28749798085f4b4947e99c167dc3b2ab1f04e30',
          release_date: 'Sun Nov 01 2020'
      },
      {
          id: 6,
          title: 'HIGHWAY',
          poster_url: 'http://qrius.com/wp-content/uploads/2014/03/Highway-Movie-Poster.jpg',
          release_date: 'Tue Aug 11 2017'
      }
    ])

 return(
    <div id="wrapper">

        {/* Released Movies Grid */}
        <div id="w70">  
            <div className={classes.root}>
            <GridList cellHeight={350} className={classes.gridList} cols={3}  style={{ width: '100%' }} spacing={25}>
                <GridListTile key="posterData.id" cols={4} style={{ height: 'auto' }} spac>
                <ListSubheader component="div">Released Movies List:</ListSubheader>
                </GridListTile>
                {posterData.map(tile => (
                <GridListTile key={tile.id}>
                    <img src={tile.poster_url} alt={tile.title} />
                    <GridListTileBar
                    title={tile.title}
                    subtitle={<span>Release Date: {tile.release_date}</span>}
                    />
                </GridListTile>
                ))}
            </GridList>
            </div>
        </div>
        
        {/* Movie Filter Form */}
        <div id="w30">  
            width 24%
        </div>
  </div>
 );
}

ReleasedMoviesGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ReleasedMoviesGrid);
