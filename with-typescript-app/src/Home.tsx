import Link from 'next/link'
import React from 'react';
import React1a from './components/React1a'

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
return (
  <div>
    <div>Hello World from Home.tsx!!!</div>
    <Link href="/about">
      <a>About</a>
    </Link>
    <React1a />
  </div>
)
}

export default Home;
