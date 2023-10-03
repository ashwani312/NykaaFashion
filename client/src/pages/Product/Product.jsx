import { useEffect, useState } from 'react'
import './Product.scss'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import List from '../../components/List/List'
import MixFooter from '../../mixcomponents/MixFooter';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Product = () => {
  const { id } = useParams();
  const [mainImg, setMainImg] = useState(1)
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8800/api/product/${id}`);
      console.log(res.data);
      setData(res.data)

    }
    fetchData()
  }, [id])
  console.log(typeof data)

  //   const data = [
  //     {
  //         id: 1,
  //         title: "coat",
  //         img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/a/aa03_1_f58c484f.jpg",
  //         img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/9/79c2856185449401_0.jpg",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12
  //     },
  //     {
  //         id: 2,
  //         title: "coat1",
  //         img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/c/4ccfee0NYK_VEROM00021589_1.jpg",
  //         img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/9/79c2856287696901_1.jpg",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12
  //     },
  //     {
  //         id: 3,
  //         title: "coat2",
  //         img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/d71eee0NYK_VEROM00028001_1.jpg",
  //         img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/9/79c2856287698302_1.jpg?rnd=20200526195200",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12
  //     },
  //     {
  //         id: 4,
  //         title: "coat3",
  //         img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/a/aa03_1_f58c484f.jpg",
  //         img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/9/79c2856287698302_2.jpg?rnd=20200526195200",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12
  //     },
  //     {
  //         id: 5,
  //         title: "coat4",
  //         img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/e/tr:w-774,/de35205_1_5ecdb702.jpg?rnd=20200526195200",
  //         img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/b/tr:w-774,/0b1585bPW801_1.jpg?rnd=20200526195200",
  //         isNew: true,
  //         oldPrice: 19,
  //         price: 12
  //     },

  // ]

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }
  const handleDecrease = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  return (
    <>
      <div className='product'>
        <div className="left">
          <div className="images">
            {/* {data.map((item, index) => ( */}
            <>
              <img src={data?.img} alt="" onClick={() => setMainImg(1)} />
              <img src={data?.img2} alt="" onClick={() => setMainImg(2)} />
            </>
            {/* ))} */}
          </div>
          <div className="mainImg">
            <img src={mainImg===1? data?.img : data?.img2} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>{data?.title}</h1>
          <span className='price'>$199</span>
          <p>{data?.desc}</p>
          <div className="quantity">
            <button onClick={handleDecrease}>-</button>
            {quantity}
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className='add'>
            <ShoppingCartCheckoutIcon />ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              Add to widhlist
            </div>
            <div className="item">
              Add to compare
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>

      <div className='result'>
        <h1>your Results</h1>
      </div>
      <List />
      <MixFooter />
    </>
  )
}

export default Product