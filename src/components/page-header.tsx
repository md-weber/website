import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function PageHeader() {
  function smoothScrollingToService() {
    return () => {
      const element = document.getElementById("my-services");
      if (!!element)
        element.scrollIntoView({ block: "start", behavior: "smooth" });
    };
  }

  return (
    <section className="bg-white dark:bg-gray-900 md:py-8 mt-16 lg:py-4">
      <div className="mx-auto text-center px-4 lg:py-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hi, I&apos;am Max
        </h1>
        <h2 className="mb-4 text-2xl tracking-tight leading-none text-gray-500 md:text-5xl lg:text-2xl dark:text-gray-300">
          Software Engineer, Trainer and Speaker
        </h2>
        <div
          className={
            "flex justify-center rounded-2xl overflow-hidden py-5 lg:py-8"
          }
        >
          <Image
            src={"/images/profile_max_main.png"}
            className={
              "object-contain rounded-full bg-gradient-to-tr from-cyan-200 to-blue-500 border-black shadow-md"
            }
            alt={"Max Weber - Profile Image"}
            height={250}
            width={250}
          />
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link onClick={smoothScrollingToService()} href={""}>
            <button className={"btn w-full"}>Lets work together</button>
          </Link>
          <Link href={"/about-me"}>
            <button className={"w-full btn btn-outline"}>More about me</button>
          </Link>
        </div>
      </div>

      <FaArrowDown
        className={
          "absolute bottom-0 left-1/2 text-3xl text-gray-700 animate-bounce dark:text-gray-200"
        }
        onClick={smoothScrollingToService()}
      />
    </section>
  );
}
