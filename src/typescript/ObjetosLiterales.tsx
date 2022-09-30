interface Persona {
    nombreCompleto: string,        
    edad: number,
    direccion: {
        pais: string,
        estado: string,
        ciudad: string,
        calle: string,
        numero: number
    }
}
interface Direccion {
    pais: string,
    estado: string,
    ciudad: string,
    calle: string,
    numero: number
}

//const frank = new Persona(); //error

export const ObjetosLiterales = () => {

const persona: Persona = {
    nombreCompleto: 'Saul',
    edad: 23,
    direccion: {
        pais: 'Mexico',
        estado: 'Nayarit',
        ciudad: 'Tepic',
        calle: 'Conocido',
        numero: 533
    }
}

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {/*JSON.stringify(persona)*/}
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}