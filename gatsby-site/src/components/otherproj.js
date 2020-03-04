import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers({otherProj}) {
  const classes = useStyles();

  return (
    <div>
    {otherProj.map((proj) => 
    <div className={classes.root} style={{borderStyle: "solid", marginBottom : "1em", backgroundColor : '#003366'}}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              {proj.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              {proj.link}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          {proj.desc}
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Technology
        </Typography>
        <div>
            {proj.tags.map((tag) =>           <Chip className={classes.chip} color="primary" label={tag} />
        )}
        </div>
      </div>
      <div className={classes.section3}>
        <Button color="primary">{proj.link}</Button>
      </div>
    </div>
    )}
    </div>
  );
}
