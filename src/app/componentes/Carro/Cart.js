import './cart.css'

export default function Cart (){
    return(
        <main>
            <div className="tarjeta">
                <img src="assets/españa/tortilla.jpg" alt="" />
                <div className="info">
                    <h4>Nombre</h4>
                    <p>Precio</p>
                    <div className='cantidad'>
                    <button>➖</button>
                    <p>0</p>
                    <button>➕</button>
                    </div>
                    <p>Total</p>
                </div>
                <button>❌</button>
            </div>
        </main>
    )
}