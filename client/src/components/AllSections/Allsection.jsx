import React from 'react'

import './Allsections.scss'
import Allcard from '../AllCard/Allcard'

const Allsection = () => {

    const data1 = [
        "https://images-static.nykaa.com/uploads/fd87746f-492f-4a29-b11e-62d1d26779ea.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/75618933-91a8-4857-ad37-0d23294d4f6f.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/35a13f7c-3602-4a90-83ea-0a14bab44c99.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/22284058-1fea-469b-8eaa-065f835f1817.jpg?tr=w-240,cm-pad_resize"
    ]
    return (
        <div className='allSections'>
            <div className="items">
                <div className="item">
                    <img src="https://images-static.nykaa.com/uploads/d919c3c7-e443-4d16-8891-724abbe80198.jpg?tr=w-2400" alt="" className='titleimg'/>
                    <div className="itemimages">

                    {data1.map((ele, index) => {
                        return (
                            <Allcard item={ele} id={index}/>
                        )
                    })}
                    </div>
                </div>
                {/* <div className="item">
                    <img src="https://images-static.nykaa.com/uploads/90c04fc5-65a8-4197-b929-d4c0cf37a098.jpg?tr=w-2400" alt="" />

                </div>
                <div className="item">
                    <img src="https://images-static.nykaa.com/uploads/e0db3ee9-3d5c-49be-a0c0-0b8b77e5146c.jpg?tr=w-2400" alt="" />

                </div>
                <div className="item">
                    <img src="https://images-static.nykaa.com/uploads/f6f8075d-5500-48d6-8def-13318c4b7f74.jpg?tr=w-2400" alt="" />

                </div> */}
            </div>
        </div>
    )
}

export default Allsection