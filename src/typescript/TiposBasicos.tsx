import React from 'react'

export const TiposBasicos = () => {

let FicIdNombre: string | number   = "Saul";
//FicIdNombre = 706;

const FicNombre: string = "Bibiano";
const FicApellidos: string = "Ortega Dorador"
const FicNumControl: number = 17401036;
const FicNumControl2 = 1036;
const FicFechaReg: Date =  new Date();
let FicExperiencia = 10;
let FicActivo: boolean = true;
FicExperiencia = 25;

//Arreglo
let FicPasatiempos: string[] = ['futbol', 'squash', 'leer', 'series y peliculas'];
//FicPasatiempos.push(706);
//FicPasatiempos.push(true);

let FicLibros = [];
FicLibros.push(706);
FicLibros.push(true);
FicLibros.push('El principito');

    return (
        <>
          <h3>Tipos Básicos</h3> 
          {"Alias: " + FicIdNombre}, <br></br>
          {"Nombre: " + FicNombre}, <br></br>
          {"Apellidos: " + FicApellidos}, <br></br>
          {"No Control: " + FicNumControl}, <br></br>
          {"No Control 2: " + FicNumControl2}, <br></br>
          {"Fecha de Registro: " + FicFechaReg.toString()}, <br></br>
          {"Años de Experiencia: " + FicExperiencia}, <br></br>
          {"Estatus: " + (FicActivo) ? 'Activo' : 'No Activo'}, <br></br>
          {"Libros: " + FicLibros[0]}, 
          {(FicLibros[1]) ? 'Activo' : 'No Activo'}, 
          {FicLibros[2]}
        </>
    )
}