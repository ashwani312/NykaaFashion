import React from 'react'
import './Allcard.scss'
import { Link } from "react-router-dom"
const Allcard = ({ item, id }) => {
    return (
        <>
            {/* <Link to={`/product/${id}`} className='link'> */}
                <div className='card'>
                        <img src={item} alt="" className='mainImg' />
                </div>

            {/* </Link> */}
        </>
    )
}

export default Allcard