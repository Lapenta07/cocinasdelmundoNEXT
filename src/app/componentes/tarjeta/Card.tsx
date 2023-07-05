import '../tarjeta/Card.css';


export default function Card ({producto}){

    return(
        <div className="card">
        <div className="receta">
            <img src={producto.imagen} alt="" />
        </div>
        <div className="details">
            <h3 className="titulo">{producto.nombre}</h3>
            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>{producto.rating}</span>
            </div>
            <div className="tags">
                <span>{producto.ingredientes[0]}</span>
                <span>{producto.ingredientes[1]}</span>
                <span>{producto.ingredientes[2]}</span>
            </div>
            <div className="info">
                <p>{producto.descripcion}</p>
                <a href="/index.html">
                    <h4 className="link">RECETA</h4>
                </a>
            </div>
        </div>
    </div>

    )
}
