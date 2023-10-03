import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import './Specialcat.scss'
const Specialcat = () => {

    const [currSec, setCurrSec] = useState(0);
    const sections = [
        {
            name: "Watch",
            img: "https://images-static.nykaa.com/uploads/a3442744-623c-41a9-aa0c-8a18558a4aba.jpg"
        },
        {
            name: "Shoes",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/kids/whats_new/new_trends/Bold-Sneakers.jpg"
        },
        {
            name: "KidsJacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/kids/whats_new/new_trends/Denim-Squared.jpg"
        },
        {
            name: "poloT-shirt",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/men/whats_new/new_trends/90_s-Brights.jpg"
        },
        {
            name: "Jewellary",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/women/whats_new/Categories/NewTrends.Jewellery_1_.jpg"
        },
        {
            name: "Topwear",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/women/whats_new/new_trends/Amber_Sunsets.jpg"
        },
        {
            name: "Camera",
            img: "https://images-static.nykaa.com/uploads/d39b5d66-cb4c-4dc8-adac-45b373812301.jpg"
        },
        {
            name: "Headphone",
            img: "https://images-static.nykaa.com/uploads/5f7750ce-2654-46f2-be96-e4a454d4fa21.jpg"
        },

    ]

    const handleNext = () => {
    
        if (currSec === (sections.length/2)+1) {
            return;
        }
        setCurrSec(currSec + 1);
    }
    const handleprev = () => {
        if (currSec <= 0) {
            return;
        }
        setCurrSec(currSec - 1);
    }
    return (
        <div style={{textAlign : "center"}}>
        <h1>buy by your preferanaces</h1>
        <div className='specialcontainersection'>
            
            <div className="bar1" style={{ display: `${currSec===0 ? "none" : "flex"}` }}>
                <div className="next" onClick={handleprev} >
                    <WestIcon className='westicon' />
                </div>
            </div>
            <div className='sections'>
                <div className="sectionList" style={{ transform: `translateX(-${currSec * 70}px)` }}>
                    {sections.map((item) => (
                        <Link to={`section/${item.name.toLowerCase()}`} className='link'>
                        <div className="sectionItem">
                            <img src={item.img} alt="" />
                            <span>{item.name}</span>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bar2" style={{ display: `${currSec===5? "none" : "flex"}` }}>
                <div className="next" onClick={handleNext}>
                    <EastIcon className='easticon' />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Specialcat




