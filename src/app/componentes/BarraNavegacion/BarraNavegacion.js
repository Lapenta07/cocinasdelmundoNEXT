'use client'
import { Store } from "../Store";
import { useContext, useEffect, useState } from "react";
import "./BarraNavegacion.css";
import Link from 'next/link'

function BarraNavegacion() {

    const {state, dispatch} = useContext(Store);

    const {cart} = state;
    const [cartItemsCount, setCartCantidad] = useState(0)

    useEffect(()=>{
        setCartCantidad(cart.cartItems.reduce((a, c)=> a + c.cantidad, 0))
    },[cart.cartItems])


return (
<header>
    <div className="logo">
    <img src="./assets/cheff/facha.png" alt="logo" />
    </div>
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
        <i class="fa-solid fa-cart-shopping"></i><spam>{cartItemsCount}</spam>
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