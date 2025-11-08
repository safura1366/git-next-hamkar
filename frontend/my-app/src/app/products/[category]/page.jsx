import { productData } from '@/app/data'
import Link from 'next/link'
import React from 'react'

export default function categoryPage({params}) {
    let {category}=params
    let products=productData[category]
  return (
    <div>
      <ul>
        {
            products.map((product)=>(
                <li>
                    <Link href={`/products/${category}/${product.name}`}>{product.name}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
