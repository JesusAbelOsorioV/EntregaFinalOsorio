import cart from '../assets/cart.svg';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cartW" className="cart" />
            <span className='numerador'>
                0
            </span>
        </div>
    )
}
export default  CartWidget