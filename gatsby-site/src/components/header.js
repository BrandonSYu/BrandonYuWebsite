import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

import { deepOrange, deepPurple, indigo } from '@material-ui/core/colors';

// import HomeIcon from '@material-ui/icons/Home';

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  indigo: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
  },
  links: { 
    display : 'flex', 
    flexDirection : 'row', 
    alignContent : 'flex-end',
    justifyContent : 'flex-end'
  },
}));

function Header ({ navLinks }) {
  const classes = useStyles();

  return (
  //   <header
  //     style={{
  //       background: `#00003f`,
  //       marginBottom: `1.45rem`,
  //     }}
  //   >
  //         <div className={classes.root}>
  // <Avatar className={classes.indigo}>BY</Avatar>
  //     </div>
        // <div style={{ margin: 0, display : 'flex', direction : 'row', justifyContent : 'flex-end'}}>
        //     {navLinks.map((navLink) => (        <Link
        //     to={navLink.link}
        //     style={{
        //       color: `white`,
        //       textDecoration: `none`,
        //       paddingRight : '1.45rem',
        //     }}
        //     >{navLink.name}</Link>))}
        // </div>
  
  //   </header>
  <div>
    <AppBar position="static" >
    <Toolbar className={classes.purple}>
                {/* <Typography variant="title" color="black">
                React & Material-UI Sample Application
                </Typography> */}
                         <div className={classes.root}>
   <Avatar className={classes.indigo}>BY</Avatar>
       </div>  
       <div className = {classes.links}>
            {navLinks.map((navLink) => (        <Link
            to={navLink.link}
            style={{
              color: `white`,
              textDecoration: `none`,
              paddingRight : '1.45rem',
            }}
            >{navLink.name}</Link>))}
        </div>
            </Toolbar>
    </AppBar>
  </div>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
