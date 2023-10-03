import React from 'react'
import './Topbar.scss'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
const Topbar = () => {
  return (
    <div className='topbar'>
          <div className="supports">
            <span>
                <SmartphoneIcon/>
                App Download</span>
            <span> 
                <HelpOutlineIcon/>
                Help</span>
          </div>
    </div>
  )
}

export default Topbar