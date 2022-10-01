
import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqResp";
import { ReqRespUsuarioListado, Usuario } from "../../interfaces/reqResp";

const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const ficRefPage = useRef(1);
    
    useEffect(() => {
        //Llamar función de carga de usuarios.
        ficFnCargaUsuarios();
        }, []);
        const ficFnCargaUsuarios = async () => {
            const ficResponse = await
            //Llamar API
            reqRespApi.get<ReqRespUsuarioListado>('/users', {
                params: {
                    page: ficRefPage.current
                }
            })
            .then(resp=> {
                //console.log(resp);   
                //console.log(resp.data);
                //console.log(resp.data.data);
                //console.log(resp.data.data[0].first_name);
                //console.log(resp.data.data);
                if (resp.data.data.length > 0) {
                    setUsuarios(resp.data.data);
                    ficRefPage.current ++;
                }
                else {
                    alert('No hay más registros');
                }     

                const ficFnPaginaSiguiente = ()  => {
                    ficRefPage.current ++;
                    ficFnCargaUsuarios(); 
                }
                const ficFnPaginaAnterior = () => {
                    if ( ficRefPage.current > 1 ){
                        ficRefPage.current --;
                        ficFnCargaUsuarios();
                    } 
                }

                return{
                    usuarios,
                    //para no exponer la funcion
                    //ficFnCargaUsuarios
                    ficFnPaginaAnterior,
                    ficFnPaginaSiguiente
                }   
            })
            .catch(err => console.log(err))
        }
    