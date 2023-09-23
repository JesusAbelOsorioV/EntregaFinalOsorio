import { useContext } from 'react';
import cart from '../assets/cart.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
        <div>
            <Link to='/cart'>
            <img src={cart} alt="cartW" className="cart" />
            </Link>
            <span className='numerador'>
            {totalQuantity}
            </span>           
        </div>
    )
}
export default  CartWidget