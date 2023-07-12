import '../tarjeta/Card.css';
import Link from 'next/link';
//<i className="fa-solid fa-star"></i>
export default function Card ({producto}){


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
                    <Link href="/" className="carrito">
                        <span><i className="fa-sharp fa-solid fa-cart-plus"></i></span>
                    </Link>            
                </div>
            </div>
                
            </div>
    </div>

    )
}