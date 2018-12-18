import React from 'react';
import ReactDOM from 'react-dom';

import ButtonAppBar from './components/ButtonAppBar'

//Jäin 2.1 Haku & järjestely (2p)

//Korjaa
/*
ERROR  Failed to compile with 1 errors

error  in ./node_modules/react-table/react-table.css

Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type.

*/

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <h1>Hello!</h1>
      <br />
      <div>Welcome!</div>
      <br />
  </div>
  )
}

export default Home;
