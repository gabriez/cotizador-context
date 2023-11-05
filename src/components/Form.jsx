import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"


const Form = () => {
    const { handleChanges, data, error, setError, computateCotization } = useCotizador();

    const handleSubmit = e => {
        e.preventDefault();

        if ( Object.values(data).includes("")) {
            setError(true);
            return ;
        }

        setError(false);
        computateCotization();
    }
  return (
    <>
        {error && <Error> Todos los campos son obligatorios </Error>}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select name="marca" id="marca" className="w-full p-3 bg-white border border-gray-200" 
                onChange={handleChanges} value={data.marca}>
                    <option value=""> -- Seleccione la marca --</option>
                    {
                        MARCAS.map( marca => (
                            <option key={marca.id} value={marca.id}> {marca.nombre} </option>
                        ))
                    }
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select name="year" id="year" className="w-full p-3 bg-white border border-gray-200"
                onChange={handleChanges} value={data.year}>
                    <option value=""> -- Seleccione el año --</option>
                    {
                        YEARS.map( year => (
                            <option key={year} value={year}> {year} </option>
                        ))
                    }
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Tipo de plan
                </label>
                <div className="flex gap-3 items-center">
                    {
                        PLANES.map( plan => (
                            <Fragment key={plan.id} > 
                                <label htmlFor={plan.nombre}> {plan.nombre} </label>
                                <input type="radio" name='plan' id={plan.nombre} value={plan.id} onChange={handleChanges}/>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
            <input type="submit" value="Cotizar" className="w-full bg-indigo-500
            hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
             />
        </form> 
    </>
  )
}

export default Form
