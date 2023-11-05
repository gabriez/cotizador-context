import Form from "./Form"
import Loading from "./Loading"
import Result from "./Result"
import useCotizador from "../hooks/useCotizador"

const AppSeguro = () => {
  const {loading} = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
      </header>
      <main className="bg-white w-[90%] md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Form/>
        { loading ? (<Loading/>) : (<Result/>)}
      </main>
    </>
  )
}

export default AppSeguro
