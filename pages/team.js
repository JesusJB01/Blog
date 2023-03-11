import Layout from "@/components/Layout/Layout";
import PhotoTeam from "@/components/PhotoTeam";
import React from "react";

const team = ({team}) => {
    
  return (
    <Layout>
      <div>
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Quienes lo hacen posible
              </h2>
              <p className="max-w-md mx-auto text-center mt-4 text-base leading-relaxed text-gray-600">
                Nuestro equipo está compuesto por profesionales apasionados por
                la psicología y la divulgación de conocimientos sobre la mente y
                el comportamiento humano.
              </p>
            </div>

            <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-5 gap-x-8">
              {team.data.map((datos) => (
                <PhotoTeam 
                    key={datos.id}
                    datos={datos.attributes}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
    const res = await fetch('https://backend-strapi-c984.onrender.com/api/teams?populate=*&sort[0]=id%3Aasc&sort[1]=id%3Adesc')
    const team = await res.json()
  
    return {
      props: {
        team,
      },
      revalidate: 43200
    }
  }

export default team;
