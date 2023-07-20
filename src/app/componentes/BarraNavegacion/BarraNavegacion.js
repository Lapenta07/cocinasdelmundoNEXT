'use client'
import "./BarraNavegacion.css";
import Link from 'next/link'

function BarraNavegacion() {


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
        <i className="fa-solid fa-cart-shopping"></i><span>0</span>
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