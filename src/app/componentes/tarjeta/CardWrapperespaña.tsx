import '../tarjeta/CardWrapper.css'
import Card from './Card'
import data from '../recetas_españa.json'

export default function CardWrapper () {


    return(
        <div className="wrapper">  
            <div className="grilla">
                {data.map(data => (
                    <Card key={data.id} producto = {data} />
                ))}
            </div>
        </div>
    )   
}