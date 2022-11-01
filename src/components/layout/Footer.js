import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from '../../assets/images/logo.svg';
import FooterSocial from './partials/FooterSocial';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
            <div className="footer-top" style={{marginTop: '100px'}}>
            <Box>
              <Grid container spacing={5} >
                <Grid item xs={12} sm={6} md={6}>
                  <Link to='/'>
                    <img src={ Logo } width="250" alt="" className="float-righ" style={{marginBottom: '18px'}}/>
                  </Link>
                  <p>Fast-forward to today, and I’ve had the privilege of working at an advertising. a start-up, a huge corporation,</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <h2>Let’s <span>Connect.</span> 💬</h2>
                  <FooterSocial />
                </Grid>
              </Grid>
            </Box>
            </div>
        </div>
        <br/>
          <div className="footer-copyright" style={{textAlign: 'center', textTransform: 'uppercase', paddingBottom: '5%'}}>Designed and built by Ameh Abraham</div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;