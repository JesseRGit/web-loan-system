import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button'
import ButtonAppBar from './components/ButtonAppBar'

import Countries from './components/Countries'
import Countries_3a from './components/Countries_3a'
import RestApiDemo from './components/RestApiDemo'

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <br />
      <div>Hello this is Home.tsx</div>
      <br />
  </div>
  )
}

export default Home;
