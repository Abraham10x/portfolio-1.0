import React from 'react';
import { Divider } from '@mui/material';
// import sections
import Hero from '../components/sections/Hero';

import LayoutDefault from '../layouts/LayoutDefault'

const Home = () => {

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <Divider variant="middle"/>
    </LayoutDefault>
  );
}

export default Home;