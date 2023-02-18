import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useId } from 'react'
import './Cart.css'

export function Cart() {
  const cartCheckBoxId = useId()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input
        type="checkbox"
        id={cartCheckBoxId}
        className="cart-checkbox"
        hidden
      />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/6/thumbnail.png"
              alt="macbook"
            />
            <div>
              <strong>Macbook</strong> - $1499
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
