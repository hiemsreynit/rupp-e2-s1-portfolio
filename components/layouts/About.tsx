"use client";
import Image from "next/image";
import MyImage from "@/public/sreynit.png";
import { IoArrowForwardCircle } from "react-icons/io5";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col gap-y-20 md:gap-y-0 md:flex-col lg:flex-row justify-around md:justify-around lg:justify-around items-center relative" id="about-me-sec">
      <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
      <section className="relative z-5 w-72 h-72 md:w-96 md:h-110 rounded-3xl rotate-12 hover:scale-105 transition-transform duration-500">
        <div className="relative inset-0 bg-transparent border-4 border-style h-full md:h-[90%] lg:h-[90%] rounded-[40px] md:rounded-[80px] lg:rounded-[80px] rotate-4 md:rotate-2 lg:rotate-2" />
        <figure className="relative -top-70 md:-top-100 inset-0 overflow-hidden bg-secondary h-full md:h-[90%] lg:h-[90%] rounded-[40px] md:rounded-[80px] lg:rounded-[80px] rotate-32 md:rotate-28 lg:rotate-28">
          <Image
            src={MyImage}
            alt="Hiem Sreynit"
            fill
            className="object-cover -rotate-40 mt-7 ml-8 md:mt-10 md:ml-5"
          />
        </figure>
      </section>
      <section
        className="md:w-[80%] lg:w-[50%] flex justify-center items-center md:items-center lg:items-start flex-col gap-8 px-6"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-desc text-style">
          Who is&nbsp;
          <i className="text-primary text-2xl md:text-4xl">Hiem Sreynit?</i>
        </h2>
        <p className="text-md text-justify text-desc-text md:text-lg leading-7">
          As a developer with a designer’s eye, I love the challenge of turning
          a blank canvas into a dynamic, user-centered reality. Currently
          pursuing my Bachelor’s in Computer Science, I’ve honed my skills in
          frontend technologies and UI/UX principles to create mobile-first
          layouts that feel seamless. Whether I’m debugging complex logic in C++
          or Java, or refining visual hierarchies in a new web project, I
          approach every task with a problem-solving mindset and a focus on
          modern, utility-first styling.
        </p>
        <section className="w-full flex justify-between md:items-center items-start gap-x-2 lg:gap-x-12">
          <dl className="flex flex-col justify-center gap-y-2">
            <dt className="text-xl md:text-3xl lg:text-4xl font-bold text-secondary">
              10+
            </dt>
            <dd className="text-desc-text">Projects Completed</dd>
          </dl>

          <dl className="flex flex-col justify-center gap-y-2">
            <dt className="text-xl md:text-3xl lg:text-4xl font-bold text-secondary">
              5+
            </dt>
            <dd className="text-desc-text">Technologies used</dd>
          </dl>

          <dl className="flex flex-col justify-center gap-y-2">
            <dt className="text-xl md:text-3xl lg:text-4xl font-bold text-secondary">
              100%
            </dt>
            <dd className="text-desc-text">Commitment</dd>
          </dl>
        </section>
        <a href="#project-sec" className="relative w-50 bg-style hover:scale-102 text-desc-text pl-1 py-0 rounded-full flex flex-row-reverse gap-1 items-center justify-between transition-transform duration-300"> 
          <IoArrowForwardCircle className="w-12 h-12 text-white"/>
            <button className="w-full bg-primary text-white px-4 py-2 rounded-full">Broswe Projects</button>
        </a>
      </section>
    </section>
  );
}
