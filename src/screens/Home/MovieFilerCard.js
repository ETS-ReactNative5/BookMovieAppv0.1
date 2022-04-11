import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';


const styles = (theme) => ({
  card: {
      margin: '2%',
      width: '90%',
      padding: '10px',
    },
  cmpPosition: {
    margin: theme.spacing.unit,
    minWidth: '240px',
    maxWidth: '240 px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    color: theme.palette.primary.light,
  },
  pos: {
    marginBottom: 12,
  },
});

const genreList = [
  'Drama',
  'Mystery',
  'Thriller',
  'Horror',
  'Historical',
  'Romance',
  'Action',
  'Science Fiction',
  'Fantasy',
  'Comedy',
];

const artistList = [
  'Dwanyne Johnson',
  'Emma Clark',
  'Rebecca',
  'Cayettana',
  'Samuel',
  'Gilert'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MovieFilterCard(props) {
  const { classes } = props;

  const [movieName, setMovieName] = React.useState('');
  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  }

  const [genreName, setGenreName] = React.useState([]);
  const handleGenreChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const [artistName, setArtistName] = React.useState([]);
  const handleArtistChange = (event) => {
    const {
      target: { value },
    } = event;
    setArtistName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [releaseStartData, setReleaseStartData] = React.useState('');
  const handleReleaseStartData = (e) => {
    setReleaseStartData(e.target.value);
  };

  const [releaseEndData, setReleaseEndData] = React.useState('');
  const handleReleaseEndData = (e) => {
    setReleaseEndData(e.target.value);
  };
  
  function onApplyHandler(){
    props.filterLogic(
        {
        movieName,
        genreName,
        artistName,
        releaseStartData,
        releaseEndData
        }
      );
  }


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography  component="h1" className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>

        {/* Movie Name Input */}
        <FormControl className={classes.cmpPosition}>
          <InputLabel htmlFor="my-input">Movie Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" onChange={handleMovieNameChange} />
        </FormControl>
        <br/>

        {/* Genre Input */}
        <FormControl className={classes.cmpPosition}>
          <InputLabel htmlFor="demo-multiple-checkbox" id="demo-multiple-checkbox-label">Genre</InputLabel>
          <Select
            id="demo-multiple-checkbox"
            multiple
            value={genreName}
            onChange={handleGenreChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {genreList.map((genre) => (
              <MenuItem key={genre} value={genre}>
                <Checkbox checked={genreName.indexOf(genre) > -1} />
                <ListItemText primary={genre} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br/>

        {/* Artists Name */}
        <FormControl className={classes.cmpPosition}>
          <InputLabel htmlFor="demo-multiple-checkbox-2" id="demo-multiple-checkbox-label-2">Artists</InputLabel>
          <Select
            id="demo-multiple-checkbox-2"
            multiple
            value={artistName}
            onChange={handleArtistChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {artistList.map((artist) => (
              <MenuItem key={artist.id} value={artist}>
                <Checkbox checked={artistName.indexOf(artist) > -1} />
                <ListItemText primary={artist} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br/>

        {/* Release Start Date */}
        <TextField  className={classes.cmpPosition}
          name=" Release Date Start"
          label=" Release Date Start"
          onChange={(e) => setReleaseStartData(e.target.value)}
          value={releaseStartData}
          InputLabelProps={{ shrink: true}}
          type="date"
          
      />

        {/* Release End Date */}
        <TextField  className={classes.cmpPosition}
          name="Release Date End"
          label="Release Date End "
          onChange={(e) => setReleaseEndData(e.target.value)}
          value={releaseEndData}
          InputLabelProps={{ shrink: true}}
          type="date"
      />
      <br/>

      {/* Apply Filter Button */}
      <Button  className={classes.cmpPosition} variant="contained" color="primary" onClick={onApplyHandler}>APPLY</Button>
      </CardContent>
    </Card>
  );
}

MovieFilterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieFilterCard);
