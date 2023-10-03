import React from 'react'
import About from '../components/About/About'
import Specialcat from '../components/SpecialCat/Specialcat'
import FeatureProducts from '../components/FeatureProducts/FeatureProducts'
import Contact from '../components/Contact/Contact'

const MixFooter = () => {
    return (
        <div className='mixfooter'>
            <About />
            <Specialcat />
            <FeatureProducts />
            <Contact />
        </div>
    )
}

export default MixFooter