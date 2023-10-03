import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './Slider.scss'
import { useEffect, useState } from 'react';


const Slider = () => {

    const [currSlide, setCurrSlide] = useState(0);
    const data = [
        "https://images-static.nykaa.com/uploads/21d67ab8-d373-4158-a116-13ac76f7cd8c.jpg?tr=w-2400",
        "https://images-static.nykaa.com/uploads/a6e3ce77-b314-4a29-8917-15d9e903411d.gif?tr=w-2400",
        "https://images-static.nykaa.com/uploads/7493a601-b813-4f2c-afff-bae4b9e8c2a2.jpg?tr=w-2400",
        "https://images-static.nykaa.com/uploads/c0b06ae5-9b6a-4760-831b-4ea3f01c0e69.jpg?tr=w-2400",
        "https://images-static.nykaa.com/uploads/5ed4abef-0b35-4df7-946b-b703f284846a.jpg?tr=w-2400",
        "https://images-static.nykaa.com/uploads/045c0e94-c82d-43d4-ab70-484d34c41b39.gif?tr=w-2400",
        "https://images-static.nykaa.com/uploads/7914d7ab-ab7b-4d0a-b3b2-66525dc392e4.jpg?tr=w-2400",
        "https://images-static.nykaa.com/uploads/2fc67410-a246-472a-87a6-3a01827232ec.jpg?tr=w-2400"
    ]

    const prevSlide = () => {
        setCurrSlide(currSlide === 0 ? data.length - 1 : currSlide - 1);
    }
    const nextSlide = () => {
        setCurrSlide(currSlide === data.length - 1 ? 0 : currSlide + 1);
    }
    useEffect(() => {
        const sliderInterval = setInterval(() => {
            console.log(currSlide)
            if (currSlide > (data.length - 2)) {
                setCurrSlide(0);

                return;
            } else {
                setCurrSlide(currSlide + 1);
            }
        }, 3000)

        return () => {
            clearInterval(sliderInterval);
        }
    });
    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currSlide * 100}vw)` }}>
                {data.map((src, index) => {
                    return (
                        <img src={src} alt="" key={index} />
                    )
                })}
            </div>
            <div className="icons">
                <div className="iconprev" onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className="iconnext" onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider