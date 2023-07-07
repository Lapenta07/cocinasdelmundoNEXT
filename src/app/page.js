import Image from 'next/image'
import './page.css'

export default function Home() {
  return (
    <main className='main'>
      <div className="left">
      <div className="nombre">
        <h1>Cocinas del mundo</h1>
      </div>
      <div className="introduccion">
        <p>Bienvenido/a a nuestro restaurante con platos de España, Francia e Italia. Aquí encontrarás una amplia
          variedad de platos típicos de estos países, una breve descripción y la posibilidad de pedirlos para que los
          llevemos a tu casa.</p>
      </div>
      <div className="button">
        <div>
          <a href="./pages/nosotros.html">Ver más</a>  
        </div>
      </div>
    </div>
    <div className="right">
      <div className="imagen">
        <img src="./assets/cheff.png" alt="chef"/>
      </div>
    </div>
  </main>
    
  )
}
