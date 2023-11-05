import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants";
import { useCallback, useRef } from "react";
const Result = () => {
    const {result, data} = useCotizador();
    if (result === 0) return null;
    const {marca, year, plan} = data;
    const yearRef = useRef(year);

    const [marcaName] = useCallback(MARCAS.filter(item => item.id === Number(marca)), [result]);
    const [planName] = useCallback(PLANES.filter(item => item.id === Number(plan)), [result]);



  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-500 font-black text-3xl">
            Resumen
        </h2>

        <p className="my-2">
            <span className="font-bold">Marca: </span>
            {marcaName.nombre}
        </p>
        <p className="my-2">
            <span className="font-bold">Plan: </span>
            {planName.nombre}
        </p>
        <p className="my-2">
            <span className="font-bold">Año del auto: </span>
            {yearRef.current}
        </p>
        <p className="my-2 text-2xl">
            <span className="font-bold">Total cotización: </span>
            {result}
        </p>
    </div>
  )
}

export default Result
