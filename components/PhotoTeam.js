import Image from "next/image";
import React from "react";

const PhotoTeam = ({ datos }) => {
  const { nombre, descripcion, foto, role } = datos;

  return (
    <div>
      <Image
        width={68}
        height={68}
        className="object-cover mx-auto rounded-full max-h-[68px]"
        src={foto.data.attributes.formats.small.url}
        alt=""
      />
      <p className="mt-8 text-lg font-semibold leading-tight text-black">
        {nombre}
      </p>
      <p className="mt-1 text-center leading-tight text-gray-600">
        {descripcion}
      </p>
      <p className="mt-1 text-center leading-tight text-black font-bold">{role}</p>
      {/*  <p className="mt-1 text-base leading-tight text-gray-600">
                  redes sociales
                </p> */}
    </div>
  );
};

export default PhotoTeam;
