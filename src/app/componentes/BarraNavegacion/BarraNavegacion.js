'use client'
import { useContext } from "react";
import "./BarraNavegacion.css";
import Link from 'next/link'
import { CartContext } from "../../context/ShoppingCart";

function BarraNavegacion() {

    const [cart, setCart] = useContext(CartContext);
    const cantidad = cart.reduce((acc, curr)=>{
        return acc + curr.cantidad;
    },0)

return (
<header>
    <div className="logo"><Link href='/'>
    <img src="./assets/cheff/facha.png" alt="logo" />
    </Link></div>
    <input type="checkbox" id="nav_check" hidden />
    <nav>
    <div className="logo">
        <img src="./assets/cheff/facha.png" alt="logo" />
    </div>
    <ul>
        <li><Link href='/'>
        Home
        </Link></li>
        <li><Link href="/espana">
        Recetas
        </Link></li>
        <li><Link href="/carrito">
        <i className="fa-solid fa-cart-shopping"></i><span className="numerito">{cantidad}</span>
        </Link></li>
        <li><Link href="/contacto">
        Contacto
        </Link></li>
    </ul>
    </nav>
    <label for="nav_check" className="hamburger">
    <div></div>
    <div></div>
    <div></div>
    </label>
</header>
);
}

export default BarraNavegacion