import { IconType } from 'react-icons';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiPostgresql, SiMicrosoftsqlserver } from 'react-icons/si';

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillsData {
  title: string;
  description: string;
  items: Skill[];
}

export const skills: SkillsData = {
  title: "Mis skills",
  description: "Estos son algunos de los lenguajes y tecnologías que manejo actualmente:",
  items: [
    { name: "HTML 5", icon: FaHtml5 },
    { name: "CSS 3", icon: FaCss3 },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind.css", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Express.js", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "SQL Server", icon: SiMicrosoftsqlserver },
  ],
};