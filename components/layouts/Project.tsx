"use client";

import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Project() {
  const projectItems = [
    {
      id: "1",
      name: "Hall Booking",
      Image: "/hall-booking-cropped.png",
      tags: [
        {
          tag1: "Console app",
          tag2: "Java",
          tag3: "User friendly",
        },
      ],
      link: "https://github.com/hiemsreynit/HallBooking/blob/main/src/Main.java",
    },
    {
      id: "2",
      name: "UX/UI Design",
      desc: "Terminal Booking Logic A Java-based management tool using 2D arrays to simulate theater seating. Implemented automated history tracking and strict input validation for a seamless console experience.",
      Image: "/paypal-thumbnail.webp",
      tags: [
        {
          tag1: "Auth",
          tag2: "KYC",
          tag3: "Onboarding",
          tag4: "Recovery",
        },
      ],
      link: "https://figma.fun/JKNSXw",
    },
    {
      id: "3",

      name: "Hall Booking",
      desc: "Terminal Booking Logic A Java-based management tool using 2D arrays to simulate theater seating. Implemented automated history tracking and strict input validation for a seamless console experience.",
      Image: "/hall-booking-cropped.png",
      tags: [
        {
          tag1: "Console app",
          tag2: "Java",
          tag3: "User friendly",
        },
      ],
      link: "https://github.com/hiemsreynit/HallBooking/blob/main/src/Main.java",
    },
    {
      id: "4",

      name: "Hall Booking",
      desc: "Terminal Booking Logic A Java-based management tool using 2D arrays to simulate theater seating. Implemented automated history tracking and strict input validation for a seamless console experience.",
      Image: "/hall-booking-cropped.png",
      tags: [
        {
          tag1: "Console app",
          tag2: "Java",
          tag3: "User friendly",
        },
      ],
      link: "https://github.com/hiemsreynit/HallBooking/blob/main/src/Main.java",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center gap-y-12"
      id="project-sec"
    >
      <article className="flex flex-col gap-y-2">
        <h2 className="text-center text-2xl md:text-4xl text-desc-text font-bold">
          My&nbsp;
          <span className="bg-linear-to-r from-primary via-primary/70 to-style bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-center text-desc-text">
          Practical applications of my tech stack, ranging from backend software
          logic to interactive user interfaces.
        </p>
      </article>
      <section className="w-full bg-transparent grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen px-12 md:px-16 lg:px-36">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((item, index) => (
            <li
              key={index}
              className="card-container bg-transparent hover:shadow-md hover:shadow-style/30 dark:hover:shadow-style/70 rounded-md md:rounded-lg lg:rounded-xl hover:scale-102 transition-transform duration-500"
            >
              <a href={item.link} target="_blank">
                <Image
                  src={item.Image}
                  alt="hall booking image"
                  width={800}
                  height={450}
                  className="rounded-t-xl w-full h-64"
                />
              </a>
              <section className="flex justify-between items-center p-4">
                <dl className="flex flex-col gap-y-2">
                  <dd className="w-fit text-desc-text/90 text-justify flex justify-between items-center gap-x-2">
                    {item.tags.map((tag, index) =>
                      Object.values(tag).map((val, j) => (
                        <span
                          key={`${index}-${j}`}
                          className="w-fit bg-style-1 px-2 py-1 text-xs text-white rounded-full"
                        >
                          {val}
                        </span>
                      ))
                    )}
                  </dd>
                  <dt className="text-lg md:text-xl lg:text-2xl text-desc-text font-bold">
                    {item.name}
                  </dt>
                </dl>
                <button className="">
                  <IoArrowForwardSharp className="w-6 h-6 text-desc-text" />
                </button>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
