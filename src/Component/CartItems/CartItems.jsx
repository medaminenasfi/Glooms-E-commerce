import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assest/cart_cross_icon.png';

export const CartItems = () => {
    const { getTotalCartAmount,all_products, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div >
                            <div className="cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p> {/* Corrected line */}
                                <button className='cartitems-quantity'> {cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt=""  className='carsitems-remove_icon'/>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="catritems-total">
                     <h1> Cart Totals</h1>
                     <div>
                        <div className="cartitems-total-items">
                            <p>  Subtotal</p>

                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-items'>
<p>Shipping Fee</p>
<p>Free</p>

                        </div>
                        <hr/>
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                     </div>
                       <button>PROCEEDD TO CHECKOUT </button>
                </div>
                <div className="cartitems-promocode">
                                 <p> If you have a promo code , Enter it here </p>
                              <div className="cartitems-promobox">
                                <input  type="text" placeholder='promo code'/>
                                <button>Submit</button>
                              </div>
                </div>
            </div>
        </div>
    );
};
