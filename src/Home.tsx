import React from 'react';
import ReactDOM from 'react-dom';

import ButtonAppBar from './components/ButtonAppBar'

//Jäin 2.1 Haku & järjestely (2p)

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
