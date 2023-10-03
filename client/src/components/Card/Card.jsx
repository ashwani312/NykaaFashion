import React from 'react'
import './card.scss'
import { Link } from "react-router-dom"
const Card = ({ item, id }) => {
    return (
        <>
            <Link to={`/product/${id}`} className='link'>
                <div className='card'>
                    <div className="image">
                        <img src={item?.img} alt="" className='mainImg' />
                        <img src={item?.img2} alt="" className='secondImg' />
                    </div>
                    <h2>{item?.title}</h2>
                    <div className="prices">
                        <h3> <p>&#x20B9;</p> {item?.price}</h3>
                        <h3> <p>&#x20b9;</p> {item?.oldPrice || item?.price + 20}</h3>
                    </div>
                </div>

            </Link>
        </>
    )
}

export default Card