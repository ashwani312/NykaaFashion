import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import './Sections.scss'
const Sections = () => {

    const [currSec, setCurrSec] = useState(0);
    // const [buttonview, setButtonview] = useState(true);
    const sections = [
        {
            name: "Women",
            img: "https://images-static.nykaa.com/uploads/6f67d42d-e716-4201-9806-22ebb7203a22.jpg"
        },
        {
            name: "Men",
            img: "https://images-static.nykaa.com/uploads/ca2f0715-208f-4583-b95c-99c1fdf2b7ba.jpg"
        },
        {
            name: "Kids",
            img: "https://images-static.nykaa.com/uploads/49511f80-4993-4573-b671-f43a888b2f0c.jpg?tr=w-266.6666666666667"
        },
        {
            name: "Tech",
            img: "https://images-static.nykaa.com/uploads/5d5c58b7-d578-494a-a8d9-c6fa03b40d37.gif"
        },
        {
            name: "IndianWear",
            img: "https://images-static.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/e/2e28e32MSGSMA__1.jpg"
        },
        {
            name: "Home",
            img: "https://images-static.nykaa.com/uploads/720b6359-5c7c-4e98-812b-8ffaaf9ec88e.jpg?tr=w-266.6666666666667"
        },
        {
            name: "Westernwear",
            img: "https://images-static.nykaa.com/uploads/cdbca296-d596-4814-a9dc-346ec3724203.jpg"
        },
        {
            name: "Jewellary",
            img: "https://images-static.nykaa.com/uploads/c82fbdf3-f646-4280-b3b1-cc4370303322.jpg?tr=w-133.33333333333334"
        },
        {
            name: "Partywear",
            img: "https://images-static.nykaa.com/uploads/7d187155-7740-4604-b987-6d911c21a475.jpg?tr=w-133.33333333333334"
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
        <div className='containersection'>
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
    )
}

export default Sections