"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { ScrollArea } from "@/components/ui/scroll-area";

const description =
  "La aplicación está destinada a la administración de gimnasios, la app tiene tres tipos de roles los cuales pueden realizar distintas acciones. Los roles son: Admin, Profesor y usuario.Como Admin se pueden crear profesores, crear planes de subscripción, obtener los usuarios registrados, los pagos que realizaron, activar o desactivar usuarios y profesores, registrar pagos en efectivo, también cuenta con una sección en donde el admin puede acceder a su cámara para leer el código QR que se le genera al usuario para poder ingresar al establecimiento.Como profesor puede iniciar sesión con el email y contraseña que le brinda el admin cuando se registra, al ingresar el profesor observa su dashboard con los días y horarios que él trabaja junto con los alumnos inscriptos en los diferentes horarios y puede subirles rutinas personalizadas a cada alumno.Como Usuario puede registrarse con un formulario o con Google, luego pasa a otro formulario en donde indica peso, altura, nivel de actividad para que el profesor tenga en cuenta al momento de crear su rutina, luego puede elegir el profesor, los días y el horario. Al momento de continuar se le indica el plan, el monto y la información que cargo anteriormente junto con la forma de pago que sería en efectivo o por Mercado Pago. Si selecciona efectivo, luego tiene que contactar al administrador para que informe el pago y habilitar el usuario para poder ingresar. Si selecciona Marcado Pago continua el flujo desde la página de MP y al finalizar el pago de manera exitosa regresa al login para iniciar sesión. Una vez dentro del dashboard de usuario podrá ver sus datos personales, profesor elegido y horarios, podrá ver un historial de pagos realizados, podrá ver la rutina que el profesor le subió y descargarla y por último esta la sección en donde si el usuario esta activo podrá visualizar el código QR para poder acceder al establecimiento, en el caso de que su mensualidad haya caducado dicho código no se mostrara y la app le sugerirá al usuario que realice un nuevo pago para poder ingresar, en este nuevo formulario el usuario puede decidir mantener el mismo profesor y horarios o cambiar dichos datos.";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Gestión y administración de un gimnasio",
    description: description,
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Typescript",
      },
      {
        name: "Nest.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TypeORM",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://pf-henry-front-rouge.vercel.app/",
    github: "https://github.com/Ezequiel-Sale/PF-HENRY-FRONT",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "e-commerce",
    description: "Proyecto realizado para la entrega de el módulo 4 del bootcamp de Henry. Se utilizó el stack de Next.js, Typescript y Tailwind en el frontend. En dicha aplicación se pueden observar los productos traidos de la base de datos, se puede ver el detalle del producto en otra vista que es dinámica. Posee también un formulario de inicio de sesión y uno de registro, al iniciar sesión se desbloquea el boton para agregar productos al carrito, el usuario también podrá ver sus datos y las compras realizadas en su perfil. Volviendo al carrito se pueden ver los productos agregados y no se pueden repetir dichos productos, en esta vista se pueden eliminar los productos y se suma el total de todos los productos agregados",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Typescript",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://e-commerce-eight-omega.vercel.app/",
    github: "https://github.com/Ezequiel-Sale/E-commerce",
  },
  {
    num: "03",
    category: "frontend",
    title: "proyecto 3",
    description: "description 3",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentSlide = swiper.realIndex;
    setProject(projects[currentSlide]);
  };

  return (
     <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <h3>{project.title}</h3>
              <ScrollArea className="h-[150px] w-full">
                <p className="text-white/60 pr-4">{project.description}</p>
              </ScrollArea>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white group-hover:text-accent text-xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white group-hover:text-accent text-xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-cover"
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[70px] z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
