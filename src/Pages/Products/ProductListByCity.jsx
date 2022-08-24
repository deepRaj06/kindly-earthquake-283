import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const ProductListByCity = () => {
    const city = useParams();
    // console.log(city);
    const location = useLocation();
    console.log(location)
  return (
    <div>
        by citys

    </div>
  )
}

export default ProductListByCity