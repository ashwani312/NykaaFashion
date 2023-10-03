import React from 'react'
import './Brand.scss'
const Brand = () => {
    const data = [
        "https://images-static.nykaa.com/uploads/0ba4b1de-f863-4b48-9aee-e49278d5708f.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/fffaf47f-e19b-41bc-a6a0-f3902b563e5d.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/4d60c1fd-ed3e-4637-a9b5-97ac9d3cb48a.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/bdfdc6e3-56e4-4970-9099-a569d251adff.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/ecf17ac3-1325-45d2-ae28-a1c6f39e4e44.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/e7ee07ad-5a7a-4053-bd0c-cbd529a0e13f.jpg?tr=w-400",
        "https://images-static.nykaa.com/uploads/257dd594-684a-4f18-8869-520d0a7b4044.jpg?tr=w-400",
        "https://images-static.nykaa.com/uploads/56cb765d-36ac-4927-98f9-07f3028d0777.jpg?tr=w-400",
        "https://images-static.nykaa.com/uploads/4d60c1fd-ed3e-4637-a9b5-97ac9d3cb48a.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/bdfdc6e3-56e4-4970-9099-a569d251adff.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/ecf17ac3-1325-45d2-ae28-a1c6f39e4e44.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/0ba4b1de-f863-4b48-9aee-e49278d5708f.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/fffaf47f-e19b-41bc-a6a0-f3902b563e5d.jpg?tr=w-240,cm-pad_resize",
    ]
    return (
        <div className='brand'>
            <h2>The Most Covered brands</h2>
            <div className="brandList">
                {data.map((item, index)=>(

                <div className="branditem" key={index}>
                    <img src={item} alt="" />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Brand