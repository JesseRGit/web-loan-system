//kirjoitettu muistiin
/*React-table fix copypaste:
{test: /.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'}
@zeit/next-css/index.js sisälle

config.module.rules.push({
  test: /\.css$/,
  use: options.defaultLoaders.css
})
*/

//Jäin editointi ominaisuuden tekemiseen ShowUserdataan ja TestBoyn finishaamiseen
//Korjaa sidenavin button

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
