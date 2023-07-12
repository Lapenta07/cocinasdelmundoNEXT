export default function Formulario () {

    return (
        <div>
            <form name="contact" method="POST" data-netifly="true" className="Form">
                <input type="hidden" name="form-name" value="contact"></input>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre"></input>
                <input type="text" id="apellido" name="apellido" placeholder="Apellido"></input>
                <input type="text" id="mail" name="mail" placeholder="Email"></input>
                <textarea id="mensaje" id="mensaje" name="mensaje" placeholder="Escriba su mensaje aqui..."></textarea>
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    )
}