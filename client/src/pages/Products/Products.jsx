import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'
import { useEffect, useState } from 'react';
import MixFooter from '../../mixcomponents/MixFooter';
import axios from "axios";

const Products = () => {
  const { id } = useParams();
  const catId = Number.parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sort, setSort] = useState(null);

  const [productData, setProductData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8800/api/products");
      const data = await res.data;
      const filterData= data.product.filter((item)=> item?.type === id);
      setProductData(filterData);
     
    }
    fetchData()
  }, [id])
  return (
    < >
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id='1' value={1} />
              <label htmlFor="1">T-shirts</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id='2' value={2} />
              <label htmlFor="2">Shirts</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id='3' value={3} />
              <label htmlFor="3">Jeans</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id='4' value={4} />
              <label htmlFor="4">jacket</label>
            </div>
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={2000} onChange={e => setMaxPrice(e.target.value)} />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input type="radio" name="price" id="lowest" value="low" onChange={e => setSort("lowest")} />
              <label htmlFor="lowest">Price (Lowest First)</label>
            </div>
            <div className="inputItem">
              <input type="radio" name="price" id="highest" value="high" onChange={e => setSort("highest")} />
              <label htmlFor="highest">Price (Highest First)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <List catId={catId} maxPrice={maxPrice} sort={sort} productData={productData}/>
        </div>
      </div>
      <MixFooter />
    </>
  )
}

export default Products