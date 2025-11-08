import React from 'react'
import { productData } from '../data'
import Link from 'next/link'

export default function Products() {
    let categories=Object.keys(productData)
  return (
    <div>
      <ul>
        {
            categories.map((category)=>(
                <li>
                    <Link href={`/products/${category}`}>{category}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
