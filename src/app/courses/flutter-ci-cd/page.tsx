import { ModuleOverviewComponent } from "@/components/courses/module-overview-component";
import { courseModules } from "./modules";

export default function FlutterCiCdCourseOverview() {
  return (
    <div className="prose dark:prose-invert mx-auto pb-8">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2>Flutter CI / CD</h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          The ultimative Flutter CI / CD course
        </p>
        <p className="font-bold sm:text-xl">Currently under construction. 🚧</p>
      </div>

      <ModuleOverviewComponent
        courseModules={courseModules}
      ></ModuleOverviewComponent>
    </div>
  );
}
