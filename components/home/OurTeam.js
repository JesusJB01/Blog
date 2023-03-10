import Image from "next/image";
import { imagenTeam } from "./imagenTeam";

export default function OurTeam() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-700 text-center  sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-6 text-lg text-center leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>

<ul  className="grid gap-x-10 gap-y-12 mx-auto sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {imagenTeam.map((person) => (
           <li key={person.id}>
           <div className="flex items-center gap-x-6">
             <Image
               width={68}
               height={68}
               className="h-16 w-16 object-cover max-h-[68px] rounded-full"
               src={person.imagen}
               alt={`foto del ${person.nombre}`}
             />
             <div>
               <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                 {person.nombre}
               </h3>
               <p className="text-sm font-semibold leading-6 text-indigo-600">
                 {person.descripcion}
               </p>
             </div>
           </div>
         </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
