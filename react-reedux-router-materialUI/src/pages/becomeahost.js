import React from 'react'

import ProductListing from '../features/product-listing'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import data from '../data/product.json'

// const styles = theme => ({
//     root: {
//       ...theme.mixins.gutters(),
//       paddingTop: theme.spacing.unit * 2,
//       paddingBottom: theme.spacing.unit * 2,
//     },
//   });
  
// function HomePage (props) {
//     const { classes } = props;

//     const PaperMenu = (
//         <div>
//              <Paper className={classes.root} elevation={1}>
//             <Typography variant="h5" component="h3">
//               This is a sheet of paper.
//             </Typography>
//             <Typography component="p">
//               Paper can be used to build surface or other elements for your application.
//             </Typography>
//           </Paper>
//         </div>  
        
//     );
  
//     return  <div >
//                 {PaperMenu}
//             </div>
//     }

//     HomePage.propTypes = {
//         classes: PropTypes.object.isRequired,
//     };
      
// export default withStyles(styles)(HomePage);

export default function HomePage (props) {
    return  <div className='bg'>
    
        <div className='page-container'>
        <h2>Become a Host </h2>
        <ProductListing products={data.products} />
        </div>
    </div>

}