import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useParams } from 'react-router-dom';
import './Navbar.scss';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Topbar from '../Topbar/Topbar';
import Badge from '@mui/material/Badge';
const Navbar = () => {
    const {id} = useParams()
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState(false);

    useEffect(()=>{
        
    },[id]);


    return (
        <>
            <Topbar />
            <div className='navbar'>
                <div className="wrapper">
                    <div className="left">
                        <div className="item" >
                            <Link className='link' to={'/products/women'}>Women</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to={'/products/men'}>Men</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to={'/products/kids'}>kids</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to={'/products/tech'}>Tech</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to={'/products/home'}>Home</Link>
                        </div>
                    </div>
                    <div className="center">
                        <div className="item">
                            <Link to={`/`}>
                                <img src="https://support.nykaafashion.com/hc/en-us/img/Nykaa%20Fashion%20Logo.PNG" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                <input type="text" className='inputboxsearch' style={{visibility : `${search?  "hidden": "visible"}`}}/>
                        <Search onClick={()=>setSearch(!search)}/>
                        <div className="icons">
                            <PersonIcon />
                            <div className="cartIcon" onClick={() => setOpen(!open)}>
                                <Badge badgeContent={3} color='primary'>
                                    <ShoppingCartOutlined color='action'/>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </>
    )
}

export default Navbar




{/* <div className="item">
<img src="https://cdn-icons-png.flaticon.com/128/3909/3909444.png" alt="bharat" />
<ExpandMoreIcon />
</div>
<div className="item">
<span>INR</span>
<ExpandMoreIcon />
</div> */}