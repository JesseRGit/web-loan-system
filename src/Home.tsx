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

      <div>
         Hello World.{' '}
         <Link href="/about">
           <a>About</a>
         </Link>
       </div>


      <div>Hello this is Home.tsx</div>
      <br />
      <br />

      <div>This is Material UI button test</div>
      <Button color="primary">Test Material UI</Button>
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
