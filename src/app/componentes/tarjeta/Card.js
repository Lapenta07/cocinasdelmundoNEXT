"use client"
import { useContext } from 'react';
import '../tarjeta/Card.css';
import { Store } from '../Store';
export default function Card ({producto}){

    //crear estado inicial
    const {state, dispatch} = useContext(Store)

    

    const addToCart = () =>{
        const existItem = state.cart.cartItems.find(x => x.id === producto.id);
        const cantidad = existItem ? existItem.cantidad + 1 : 1;

        if(producto.stock < cantidad){
            alert("Lo siento, el producto no tiene más stock, elige otro")
            return
        }

        dispatch({type: 'CARD_ADD_ITEM', payload:{...producto, cantidad}})
    }


    return(
        <div className="card">
        <div className="receta">
            <img src={producto.imagen} alt="" />
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
                    <button className="carrito" onClick={addToCart}>
                        <span><i className="fa-sharp fa-solid fa-cart-plus"></i></span>
                    </button>            
                </div>
            </div>
                
            </div>
    </div>

    )
}
