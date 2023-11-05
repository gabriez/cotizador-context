import { createContext, useState } from "react";
import { brandComputate, formatMoney, planComputate, yearDiscount } from "../helpers/helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false)
    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState(false)

    const handleChanges = e => {
        const {value, name} = e.target;
        setData(prevState => ({
            ...prevState, [name] : value
        }));
    }

    const computateCotization = () => {
        let resultado = 2000;
        setLoading(true);
        resultado -= yearDiscount(resultado, data.year);
        resultado = brandComputate(resultado, data.marca);
        resultado = planComputate(resultado, data.plan);
        resultado = formatMoney(resultado);
        setTimeout(()=> {
            setResult(resultado);
            setLoading(false);
        }, 2000)
    }

    return (
        <CotizadorContext.Provider value={{
            handleChanges,
            data,
            error, 
            setError,
            computateCotization,
            result,
            loading
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
};

export default CotizadorContext;