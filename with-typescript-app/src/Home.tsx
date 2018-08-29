import Link from 'next/link'
import React1a from './React1a'

export default () =>
  <div>
    Hello World from Home.tsx.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
    <React1a />
  </div>
