import useCotizador from "../hooks/useCotizador"

const Error = ({children}) => {
  return (
    <div className="border text-center
     border-red-400 bg-red-100 py-3 text-red-700">
        {children}
    </div>
  )
}

export default Error
