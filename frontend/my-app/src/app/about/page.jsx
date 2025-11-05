import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
      <h1>this is about page</h1>
      <Link href="/product">go to dashboard</Link>
    </div>
  )
}
