export const projects = [
    {
      num: "01",
      category: "Fullstack",
      title: "Gestión y administración de un gimnasio",
      description: "La aplicación está destinada a la administración de gimnasios, la app tiene tres tipos de roles los cuales pueden realizar distintas acciones. Los roles son: Admin, Profesor y usuario.Como Admin se pueden crear profesores, crear planes de subscripción, obtener los usuarios registrados, los pagos que realizaron, activar o desactivar usuarios y profesores, registrar pagos en efectivo, también cuenta con una sección en donde el admin puede acceder a su cámara para leer el código QR que se le genera al usuario para poder ingresar al establecimiento.Como profesor puede iniciar sesión con el email y contraseña que le brinda el admin cuando se registra, al ingresar el profesor observa su dashboard con los días y horarios que él trabaja junto con los alumnos inscriptos en los diferentes horarios y puede subirles rutinas personalizadas a cada alumno.Como Usuario puede registrarse con un formulario o con Google, luego pasa a otro formulario en donde indica peso, altura, nivel de actividad para que el profesor tenga en cuenta al momento de crear su rutina, luego puede elegir el profesor, los días y el horario. Al momento de continuar se le indica el plan, el monto y la información que cargo anteriormente junto con la forma de pago que sería en efectivo o por Mercado Pago. Si selecciona efectivo, luego tiene que contactar al administrador para que informe el pago y habilitar el usuario para poder ingresar. Si selecciona Marcado Pago continua el flujo desde la página de MP y al finalizar el pago de manera exitosa regresa al login para iniciar sesión. Una vez dentro del dashboard de usuario podrá ver sus datos personales, profesor elegido y horarios, podrá ver un historial de pagos realizados, podrá ver la rutina que el profesor le subió y descargarla y por último esta la sección en donde si el usuario esta activo podrá visualizar el código QR para poder acceder al establecimiento, en el caso de que su mensualidad haya caducado dicho código no se mostrara y la app le sugerirá al usuario que realice un nuevo pago para poder ingresar, en este nuevo formulario el usuario puede decidir mantener el mismo profesor y horarios o cambiar dichos datos.",
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
      image: "/assets/work/thumb1.gif",
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
      image: "/assets/work/thumb2.gif",
      live: "https://e-commerce-eight-omega.vercel.app/",
      github: "https://github.com/Ezequiel-Sale/E-commerce",
    },
    {
      num: "03",
      category: "Fullstack",
      title: "Movies App",
      description: "Aplicación desarrollada en el modulo 2 del bootcamp de Henry. Esta app en su inicio trae las peliculas que estan en la base de datos de MongoDB, tiene tres secciones más en donde la sección de Historia del cine muestra unos articulos con información sobre la historia del cine, luego en la sección de webs recomendadas se pueden visualizar algunas webs que han sido recomendadas por los usuarios, luego en la sección de Formulario se pueden crear peliculas que se guardaran en la base de datos y se visualizaran en el incio con su respectiva card",
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
        {
          name: "Express.js",
        },
        {
          name: "MongoDB",
        },
        {
          name: "Moogose",
        },
      ],
      image: "/assets/work/thumb3.gif",
      live: "https://main--sage-parfait-bb3b90.netlify.app/",
      github: "https://github.com/Ezequiel-Sale/moviesApp-Front",
    },
    {
      num: "04",
      category: "Frontend",
      title: "Tetris",
      description: "Aplicación creada con Javascript y CSS3 recreando el famoso juego Tetris",
      stack: [
        {
          name: "Javascript",
        },
        {
          name: "Css 3",
        },
      ],
      image: "/assets/work/thumb5.gif",
      live: "https://tetris-ezequielsale.netlify.app/",
      github: "https://github.com/Ezequiel-Sale/Tetris",
    },
    {
      num: "05",
      category: "Frontend",
      title: "Police vs Taxi",
      description: "Aplicación creada con HTML 5 y CSS puro",
      stack: [
        {
          name: "Html 5",
        },
        {
          name: "Css 3",
        },
      ],
      image: "/assets/work/thumb4.gif",
      live: "https://main--tiny-florentine-66d1a5.netlify.app/",
      github: "https://github.com/Ezequiel-Sale/police-vs-taxi",
    },
  ];