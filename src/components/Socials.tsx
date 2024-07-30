import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaGoogle, FaFacebook} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, url: "https://github.com/Ezequiel-Sale"},
    {icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/ezequiel-alejandro-sale-ab18aa165/"},
    {icon: <FaFacebook />, url: "https://www.facebook.com/eezequiell12"},
    {icon: <FaGoogle />, url: "mailto:ezequielsale123@gmail.com"}
]
const Socials = ({containerStyles, iconStyles}: any) => {
  return (
    <div className={containerStyles}>
        {socials.map((social: any, index: any) => <Link href={social.url} key={index} className={iconStyles}>{social.icon}</Link>)}
    </div>
  )
}

export default Socials