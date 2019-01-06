import React from 'react';
import ReactDOM from 'react-dom';

import TopNav from './components/TopNav';

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
      <div>
        <TopNav />
      </div>
      <h1>Welcome!</h1>
      <div>You can use this add, edit and remove loan system's devices, users and loans.</div>
      <div>Start by clicking top left icon and selecting what you want to see.</div>
  </div>
  )
}

export default Home;
