import { CourseModule, ModuleItem } from "@/app/courses/flutter-ci-cd/modules";

type ModuleOverviewProps = {
  courseModules: CourseModule[];
};

export const ModuleOverviewComponent = (props: ModuleOverviewProps) => {
  return (
    <div>
      <h3>Modules</h3>
      {props.courseModules.map((m) => {
        return (
          <div className="collapse border bg- dark:border-base-300 dark:bg-base-200 mb-4">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">{m.title}</div>
            <div className="collapse-content">
              <p>{m.description}</p>
              {m.moduleItems?.map((i) => {
                return renderModuleItem(i);
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const renderModuleItem = (item: ModuleItem) => {
  let itemTypeClass = "";

  switch (item.type) {
    case "lesson":
      return (
        <div className="px-4 flex justify-between">
          <div>
            <span className="tooltip pr-1" data-tip="Lesson">
              📖
            </span>
            <strong>{item.title}</strong>
          </div>
          {item.estimatedTime && (
            <span className="tooltip" data-tip="Estimated Time">
              {item.estimatedTime}
            </span>
          )}
        </div>
      );
    case "quiz":
      return (
        <div className="px-4 flex justify-between">
          <div>
            <span className="tooltip pr-1" data-tip="Quiz">
              ❓
            </span>
            <strong>{item.title}</strong>
          </div>
          {item.estimatedTime && (
            <span className="tooltip" data-tip="Estimated Time">
              {item.estimatedTime}
            </span>
          )}
        </div>
      );
    case "video":
      return (
        <div className="px-4 flex justify-between">
          <div>
            <span className="tooltip pr-1" data-tip="Video">
              📽️
            </span>
            <strong>{item.title}</strong>
          </div>
          {item.estimatedTime && (
            <span className="tooltip tooltip-left" data-tip="Estimated Time">
              {item.estimatedTime}
            </span>
          )}
        </div>
      );
    default:
      return null;
  }
};
