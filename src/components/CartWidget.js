import ShoppingCartIcon from '../media/SVGs'

export default function CartWidget() {
    return (
        <button className="mycart-btn">
            <ShoppingCartIcon color="white"/>
            My cart
        </button>
    )
}