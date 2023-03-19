import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsPage() {
  const {id} = useParams()
  return (
    <div>
      ProductsPage
    </div>
  )
}
