"use client";
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import styles from './Contact.module.css'; // Asegúrate de tener el archivo CSS en el mismo directorio

interface FormValues {
  nombre: string;
  apellido: string;
  email: string;
  phone: string;
  message: string;
}

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "(+54) 381 539 3711",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo Electrónico",
    description: "ezequielsale123@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Dirección",
    description: "Tucumán - Argentina",
  },
];

const Contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nombre: "",
    apellido: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Validaciones en tiempo real
    const newErrors = { ...errors };
    if (name === 'nombre' && !value) newErrors.nombre = "El nombre es obligatorio.";
    else if (name === 'apellido' && !value) newErrors.apellido = "El apellido es obligatorio.";
    else if (name === 'email' && (!value || !/\S+@\S+\.\S+/.test(value))) newErrors.email = !value ? "El correo electrónico es obligatorio." : "El correo electrónico no es válido.";
    else if (name === 'phone' && (!value || !/^\d+$/.test(value))) newErrors.phone = !value ? "El teléfono es obligatorio." : "El teléfono debe contener solo números.";
    else if (name === 'message' && !value) newErrors.message = "El mensaje es obligatorio.";
    else delete newErrors[name as keyof FormValues];

    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors: Partial<FormValues> = {};
    if (!formValues.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formValues.apellido) newErrors.apellido = "El apellido es obligatorio.";
    if (!formValues.email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (!formValues.phone) {
      newErrors.phone = "El teléfono es obligatorio.";
    } else if (!/^\d+$/.test(formValues.phone)) {
      newErrors.phone = "El teléfono debe contener solo números.";
    }
    if (!formValues.message) newErrors.message = "El mensaje es obligatorio.";
    return newErrors;
  };

  const sendEmail = () => {
    if (form.current) {
      emailjs.sendForm('service_470nr1h', 'template_0k0oog7', form.current, 'n0O6aFCx_KHd4rnfR')
        .then(
          () => {
            console.log('SUCCESS!');
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Mensaje enviado correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Error al enviar el mensaje",
              text: error.text,
              showConfirmButton: true,
            });
          }
        );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Lógica para enviar el formulario
      sendEmail();
      console.log("Formulario enviado correctamente", formValues);
      setFormValues({ nombre: "", apellido: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="relative flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
              ref={form}
            >
              <h3 className="text-4xl text-accent">¡Trabajemos juntos!</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quas quia quae provident voluptatem voluptatum consequatur in,
                eveniet sit itaque.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                  />
                  {errors.nombre && <p className={styles.errorMessage}>{errors.nombre}</p>}
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formValues.apellido}
                    onChange={handleChange}
                  />
                  {errors.apellido && <p className={styles.errorMessage}>{errors.apellido}</p>}
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
                </div>
              </div>
              <div className="relative">
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Ingresa tu Mensaje aquí."
                  value={formValues.message}
                  onChange={handleChange}
                />
                {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
              </div>
              <Button size="md" className="max-w-40">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
