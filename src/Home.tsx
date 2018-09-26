import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button'
import MenuAppBar from './components/MenuAppBar'

import Clock from './components/Clock'
import Countries from './components/Countries'
import Countries_3a from './components/Countries_3a'

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
      <div>Hello this is Home.tsx</div>
      <br />
      <br />

      <div>This is Clock.tsx</div>
      <Clock />
      <br />
      <br />

      <div>This is Material UI button test</div>
      <Button color="primary">Test Material UI</Button>
      <br />
      <br />

      <div>This is Countries.tsx</div>
      <Grid container={true}>
        <Grid item={true}>
        </Grid>
        <Grid item={true}>
          <Countries />
        </Grid>
      </Grid>
      <br />
      <br />

      <div>This is Countries_3a.tsx</div>
      <Grid container={true}>
        <Grid item={true}>
        </Grid>
        <Grid item={true}>
          <Countries_3a />
        </Grid>
      </Grid>
      <br />
      <br />
  </div>
  )
}

export default Home;
