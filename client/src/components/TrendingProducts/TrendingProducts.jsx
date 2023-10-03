import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './TrendingProducts.scss'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const TrendingProducts = ({ type }) => {
    const [slide, setSlide] = useState(0)
    const data = [
        {
            id: 1,
            img: "https://images-static.nykaa.com/uploads/046901e3-60a4-4ae7-a8dc-172f59beb58a.jpg",
            img2: "https://images-static.nykaa.com/uploads/6f67d42d-e716-4201-9806-22ebb7203a22.jpg",
            title: "Sarees",
            oldPrice: 1299,
            price: 999,
            category : "men"
        },
        {
            id: 2,
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Indianwear_Indianwear_Kurtis.jpg",
            img2: "https://images-static.nykaa.com/uploads/e34c905e-d746-4a0e-871e-abb203677912.jpg",
            title: "Shoots",
            oldPrice: 1999,
            price: 999,
            category : "men"
        },
        {
            id: 3,
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Footwear_Flats_1.jpg",
            img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Footwear_Sneakers.jpg",
            title: "shoes & chappals",
            oldPrice: 499,
            price: 299,
            category : "men"
        },
        {
            id: 4,
            img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Jewellery_Necklace.jpg",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Jewellery_Bracelet.jpg",
            title: "Jewelarry",
            oldPrice: 1999,
            price: 999,
            category : "men"
        },
        {
            id: 5,
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Bags_Satchel.jpg",
            img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/luggage.jpg",
            title: "Purse & Bags",
            oldPrice: 19,
            price: 12,
            category : "men"
        },
        {
            id: 6,
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Bags_Satchel.jpg",
            img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/luggage.jpg",
            title: "Purse & Bags",
            oldPrice: 19,
            price: 12,
            category : "men"
        },
        {
            id: 7,
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Bags_Satchel.jpg",
            img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/luggage.jpg",
            title: "Purse & Bags",
            oldPrice: 19,
            price: 12,
            category : "men"
        },
        {
            id: 8,
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/all_Categories_Bags_Satchel.jpg",
            img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/category/luggage.jpg",
            title: "Purse & Bags",
            oldPrice: 19,
            price: 12,
            category : "men"
        },
    ]

    useEffect(() => {
        const sliderun = setInterval(() => {
            if (slide > data.length) {
                console.log(slide)
                setSlide(0)
                return
            }
            setSlide(slide + 1);
        }, 1400)

        return () => {
            clearInterval(sliderun)
        }
    })
 
    return (

        <div className='trendingProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos, a animi totam eveniet aliquid ab? Nam voluptate suscipit obcaecati officia corrupti quod distinctio, ratione, cumque, rem dignissimos repellendus delectus! Nesciunt facere at alias.</p>
            </div>
            <div className="bottom" style={{ transform: `translateX(-${slide * 150}px)` }}>
              
                    {data.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
            </div>
        </div>

    )
}
// style={{ transform: `translateX(-${slide * 100}px)` }}

export default TrendingProducts