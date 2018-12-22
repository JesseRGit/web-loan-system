import React from 'react';
import ReactDOM from 'react-dom';

import ButtonAppBar from './components/ButtonAppBar';

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    //<link rel='stylesheet' href='/_next/static/style.css' />
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <h1>Home</h1>
      <br />
      <div>Hello this is Home.tsx</div>
      <br />
  </div>
  )
}

export default Home;
