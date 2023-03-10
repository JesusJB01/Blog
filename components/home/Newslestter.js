import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Newsletter() {
  return (
    <div className="relative isolate  overflow-hidden bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-700 sm:text-4xl">Suscríbete a nuestra newsletter</h2>
            <p className="mt-4 text-base leading-8 text-gray-900">
            Al regístrate en nuestro newsletter recibe contenido exclusivo, artículos de expertos y herramientas prácticas directamente en tu correo electrónico. ¡Únete a nuestra comunidad hoy mismo!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Direccion de correo
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-1 bg-gray-200 border-black px-3.5 py-2 text-black-50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingresar Email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Suscribirse
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-indigo-600">Artículos semanales</dt>
              <dd className="mt-2 leading-7 text-indigo-900">
                Publicaciones semanales, todos los miércoles de los temas actuales y en boga en psicologia.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-indigo-600">No spam</dt>
              <dd className="mt-2 leading-7 text-indigo-900">
              Nosotros valoramos tu privacidad y te aseguramos que al suscribirte solo recibirás contenido útil y relevante. 
              </dd>
            </div>
          </dl>
        </div>
      </div>
     
    </div>
  )
}