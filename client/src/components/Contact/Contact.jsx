import React from 'react'
import './Contact.scss'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="appplaystore">
          <div className="text">
            Download our app
          </div>
          <div className="apps">
            <img src="https://cdn-icons-png.flaticon.com/128/300/300218.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/300/300218.png" alt="" />
          </div>
        </div>
        <div className="subscribe">

        <span>SUBSCRIBE TO NEWSLETTER</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        </div>
        <div className="icons">
          <h2>Contact Us on</h2>
          <div className="iconimage">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact