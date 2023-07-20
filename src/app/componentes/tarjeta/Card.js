"use client"
import { useContext } from 'react';
import '../tarjeta/Card.css';
import { CartContext } from '../../context/ShoppingCart';

export default function Card({ producto }) {
const [cart, setCart] = useContext(CartContext);

const addToCart = () => {
    setCart((currItems) => {
    const isItemsFound = currItems.find((item) => item.id === producto.id);
    if (isItemsFound) {
        return currItems.map((item) => {
        if (item.id === producto.id) {
            return { ...item, cantidad: item.cantidad + 1 };
        } else {
            return item;
        }
        });
    } else {
        return [...currItems, { id: producto.id, cantidad: 1, precio: producto.valor }];
    }
    });

    };



    return(
        <div className="card">
        <div className="receta">
            <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="details">
            <h3 className="titulo">{producto.nombre}</h3>
            <div className="rating">
                <p>{producto.rating} <i className="fa-solid fa-star"></i> </p>
            </div>
            <div className="tags">
                <span>{producto.ingredientes[0]}</span>
                <span>{producto.ingredientes[1]}</span>
                <span>{producto.ingredientes[2]}</span>
            </div>
            <div className="info">
                <p>{producto.descripcion}</p>
                <div className="compra">
                    <h4 className="precio">${producto.valor}</h4>
                    <button className="carrito" onClick={()=> addToCart()}>
                        <span><i className="fa-sharp fa-solid fa-cart-plus"></i></span>
                    </button>            
                </div>
            </div>
                
            </div>
    </div>

    )
}
