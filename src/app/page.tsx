"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  const handleDownload = () => {
    // La ruta del archivo dentro de la carpeta public
    const filePath = '/cv.pdf';
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'cv.pdf';
    // Añadir el enlace al documento y hacer click en él
    document.body.appendChild(link);
    link.click();
    // Eliminar el enlace del documento
    document.body.removeChild(link);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Web Developer</span>
            <h1 className="h1 mb-6">
              Hola soy <br />
              <span className="text-accent">Ezequiel Sale</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            ¡Hola! Soy Ezequiel Alejandro Sale, un desarrollador full stack con una fuerte inclinación hacia el desarrollo front-end. Me apasionan los desafíos constantes del mundo IT debido a su constante evolución y las oportunidades de aprendizaje continuo que ofrece.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Descargar CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
