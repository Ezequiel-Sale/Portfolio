"use client";
import { skills } from "@/app/resume/page";
import { projects } from "@/app/work/page";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const initialStats = [
  {
    num: 1,
    text: "Año de experiencia",
  },
  {
    num: projects.length,
    text: "Proyectos completos",
  },
  {
    num: skills.items.length,
    text: "Tecnologías",
  },
  {
    num: 496,
    text: "Commits realizados",
  },
];

const Stats = () => {
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('/api/commits');
        if (!response.ok) {
          throw new Error('Error fetching commits stats page');
        }
        const data = await response.json();
        setStats((prevStats) =>
          prevStats.map((stat) =>
            stat.text === "Commits realizados" ? { ...stat, num: data.length } : stat
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchCommits();

    const interval = setInterval(fetchCommits, 6000000); // Actualizar cada minuto

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
