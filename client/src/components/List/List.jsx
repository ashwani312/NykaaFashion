import Card from '../Card/Card'
import React from 'react'
import './List.scss'

const List = ({productData}) => {

    return (
        <div className='list'>
            {productData?.map((item, index) => {
                return (
                    <Card item={item} key={index} id={item?._id}/>
                )
            })}
        </div>
    )
}

export default List