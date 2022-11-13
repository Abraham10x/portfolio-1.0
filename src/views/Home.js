import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Talk from '../components/sections/Talk';

import LayoutDefault from '../layouts/LayoutDefault'

const Home = () => {

  return (
    <LayoutDefault>
      <Hero />
      <Talk/>
    </LayoutDefault>
  );
}

export default Home;