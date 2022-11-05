import React from 'react';
import { Button, Grid } from '@mui/material';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { styled } from '@mui/material/styles';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const HeroButton = styled(Button)({
    textTransform: 'capitalize',
    width: '100%',
    fontSize: '16px',
    textAlign: 'center',
    borderRadius: '5px',
  })

  return (
    <section
      {...props}
      className={outerClasses}
      style={{backgroundColor: '#FFF9E7'}}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center"}} className="btns">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Hi, i’m Ameh Abraham. I build and design software.
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
              <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Link to='/about'>
                      <HeroButton 
                        variant="contained"
                      >
                        Hire Me
                      </HeroButton>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <HeroButton variant="outlined" 
                      // endIcon={<PlayCircleIcon/>}
                    >
                      Let's talk
                      
                    </HeroButton>
                  </Grid>
                </Grid> 
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>

              <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800" style={{position: 'relative'}}>
                <Image
                  src={require('./../../assets/images/hero/abraham.png')}
                  alt="Abraham" 
                  />
                  <Image
                    src={require('./../../assets/images/hero/figma.svg')}
                    alt='figma'
                    className='figma'
                  />
                  <Image
                    src={require('./../../assets/images/hero/javascript.svg')}
                    alt='javascript'
                    className='javascript'
                  />
                  <Image
                    src={require('./../../assets/images/hero/typescript.svg')}
                    alt='typescript'
                    className='typescript'
                  />
                  <Image
                    src={require('./../../assets/images/hero/react.svg')}
                    alt='react'
                    className='react'
                  />
            </div>
            </Grid>
          </Grid>

          <Grid container spacing={5} sx={{marginTop: '2%'}}>
            <Grid item xs={12} sm={4} md={4}>          
              <div className='recent'> <hr className='recent-line'/> <h5>My <span>recent projects.</span> </h5></div>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>   
              <Grid container spacing={2}>       
                <Grid item xs={12} sm={3} md={3}>
                  <h5 className='hero-h5'>50+</h5>
                  <p>Projects Completed</p>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <h5 className='hero-h5'>10+</h5>
                  <p>Design Projects</p>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <h5 className='hero-h5'>30+</h5>
                  <p>Dev Projects</p>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <h5 className='hero-h5'>95.9%</h5>
                  <p>Satisfied clients</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;