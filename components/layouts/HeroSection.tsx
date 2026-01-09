"use client";
import Image from "next/image";
import MyImage from "@/public/presentation-hour-no-bg.png";
import { FaFacebook, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  const FloatIcon = [
    {
      Icon: "/figma.svg",
      alt: "figma icon",
      year: "2024",
      title: "UX/UI design",
      desc: "Designed some responsive websites and a high-fidelity mini banking system app.",
      width: 48,
      height: 48,
    },
    {
      Icon: "/reactjs.svg",
      alt: "reactjs icon",
      year: "2025",
      title: "Frontend Development",
      desc: "Built e-commerce platforms and modern portfolio templates.",
      width: 48,
      height: 48,
    },
    {
      Icon: "/java.svg",
      alt: "java icon",
      year: "2024",
      title: "Software Logic",
      desc: "Developed a Cinema Hall Booking system using 2D arrays.",
      width: 48,
      height: 48,
    },
    {
      Icon: "/nextjs.svg",
      alt: "nextjs icon light",
      year: "2025",
      title: "Modern Web Mastery",
      desc: "Developed this portfolio using Next.js for optimized performance.",
      width: 48,
      height: 48,
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-20 p-0 md:p-0 items-center lg:gap-x-10">
      <section
        className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        id="home"
      >
        <article className="flex flex-col gap-3 md:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Hiem Sreynit
            <br className="lg:hidden" />
            <span className="text-style">&nbsp;| Dev & Designer</span>
          </h1>
          <p className="text-sm md:text-base text-desc-text max-w-md">
            Developer & UX/UI Designer. I turn complex ideas into simple,
            beautiful digital solutions.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <a href="#about-me-sec">
              <button className="border-2 border-primary bg-transparent px-4 py-2 hover:scale-102 rounded-full text-primary">
                About me
              </button>
            </a>
            <button className="rounded-full bg-primary text-white px-4 py-2 hover:bg-hover">
              Download Resume
            </button>
          </div>
        </article>
      </section>
      <figure className="order-1 lg:order-2 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
        <figure className="relative z-5 w-72 h-72 md:w-96 md:h-110 rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white shadow-2xl">
          <Image
            src={MyImage}
            alt="Hiem Sreynit"
            fill
            className="object-cover"
          />
        </figure>
        <div className="flex justify-center items-center gap-4 mt-6">
          <a href="https://web.facebook.com/hiem.sreynit.9" target="_blank">
            <FaFacebook className="text-3xl text-primary hover:text-hover" />
          </a>
          <a href="https://github.com/hiemsreynit" target="_blank">
            <FaGithub className="text-3xl text-primary hover:text-hover" />
          </a>
          <a href="https://t.me/hiemsreynit" target="_blank">
            <FaTelegram className="text-3xl text-primary hover:text-hover" />
          </a>
          <a
            href="https://www.linkedin.com/in/hiem-sreynit-271531376/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl text-primary hover:text-hover" />
          </a>
        </div>
      </figure>

      <section className="order-3 flex flex-col items-center lg:items-end gap-y-8 w-full">
        {/* <h4 className="text-center">Experience & Milestones</h4> */}
        <div className="relative h-50 w-full max-w-sm overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex flex-col gap-y-4"
            animate={{
              y: ["0%", "-50%"], // Moves up by half the total height of the doubled list
            }}
            transition={{
              duration: 10, // Adjust speed here (higher = slower)
              ease: "linear",
              repeat: Infinity,
            }} // Optional: Pause on hover
          >
            {FloatIcon.map((icon, index) => (
              <article key={index} className="w-full px-2">
                <div className="shadow-lg rounded-2xl dark:bg-secondary/50 bg-secondary/10 flex items-center gap-x-4 px-6 py-5 border border-white/10">
                  <figure className="shrink-0">
                    <Image
                      src={icon.Icon}
                      alt={icon.alt}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </figure>

                  <div className="w-px h-10 bg-gray-400/30"></div>

                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold text-accent-foreground leading-tight">
                      {icon.year} | {icon.title}
                    </p>
                    <p className="text-xs text-desc-text line-clamp-2 mt-1">
                      {icon.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About me section */}
    </section>
  );
}
