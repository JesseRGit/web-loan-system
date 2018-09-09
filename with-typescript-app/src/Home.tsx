import Link from 'next/link'
import React from 'react';
import ReactDOM from 'react-dom';

//import React1a from './components/React1a'
//import React1b from './components/React1b'
import Clock from './components/Clock'
import Countries from './components/Countries'
import Button from '@material-ui/core/Button'

const Home = () => {
return (
  <div>
    <div>Hello World from Home.tsx!!!</div>
    <Link href="/about">
      <a>About</a>
    </Link>

    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />

    <Countries />
    <Button color="primary">Material UI Test Button</Button>
  </div>
)
}

export default Home;
