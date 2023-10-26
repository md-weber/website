import Image from "next/image";

export default function CourseOverview() {
  return (
    <div className="prose dark:prose-invert mx-auto pb-8">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2>Courses</h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here you find the courses I am offering.
        </p>
        <p className="font-bold sm:text-xl">Currently under construction.</p>
        <Image
          className="mx-auto"
          src={"/images/under_construction.png"}
          alt={"This website is under construction bird"}
          width={300}
          height={300}
        ></Image>
      </div>
    </div>
  );
}
