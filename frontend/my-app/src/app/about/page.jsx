import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
      <h1>this is about page</h1>
      <Link href="/dashboard">go to dashboard</Link>
    </div>
  )
}
