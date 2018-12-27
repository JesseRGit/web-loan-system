//Korjaa bugi, joka estää ip:n kautta mentävänä sivulle loans return daten muokkauksen

import React from 'react';
import ReactDOM from 'react-dom';

import TopNav from './components/TopNav';

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
      <div>
        <TopNav />
      </div>
      <h1>Home</h1>
      <br />
      <div>Hello this is Home.tsx</div>
      <br />
  </div>
  )
}

export default Home;
