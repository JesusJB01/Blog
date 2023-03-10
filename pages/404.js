import React from 'react'

const Notfound = () => {

  return (
    <div className='container mx-auto flex justify-center items-center pt-[200px] '>
            <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div className="text-center">
            <p className=" text-4xl font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No encontrada</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Lo sentimos, no hemos podido encontrar la página que estás buscando</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Regresar
                </a>
                <a href="#" className="text-sm font-semibold text-gray-900">
                Contactar a soporte <span aria-hidden="true">→</span>
                </a>
            </div>
            </div>
        </main>
  </div>
  )
}

export default Notfound 