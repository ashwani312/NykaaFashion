import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
const Cart = () => {
    const products = [
        {
            id: 1,
            img: "https://images.bewakoof.com/uploads/grid/app/1x1-OversizedPrintedTees-common-1694361553.jpg",
            img2: "https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-SweatsHoods-men-01-1694250513.jpg",
            title: "jacket",
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-SweatsHoods-men-01-1694250513.jpg",
            img2: "https://images.bewakoof.com/uploads/grid/app/1x1-OversizedPrintedTees-common-1694361553.jpg",
            title: "boots",
            oldPrice: 19,
            price: 12
        }
    ]
  return (
    <div className="cart">
    <h1>Products in your cart</h1>
    {products?.map((item) => (
      <div className="item" key={item.id}>
        <img src={item.img} alt="" />
        <div className="details">
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0, 100)}</p>
          <div className="price">
            {item.quantity} x ${item.price}
          </div>
        </div>
        <DeleteOutlinedIcon
          className="delete"
        />
      </div>
    ))}
    <div className="total">
      <span>SUBTOTAL</span>
      <span>$199</span>
    </div>
    <button >PROCEED TO CHECKOUT</button>
    <span className="reset">
      Reset Cart
    </span>
  </div>
  )
}

export default Cart