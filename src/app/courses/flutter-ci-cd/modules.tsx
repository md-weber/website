export type Lesson = {
  type: "lesson";
  title: String;
  order: number;
  estimatedTime?: String;
};

export type Quiz = {
  type: "quiz";
  title: String;
  order: number;
  estimatedTime?: String;
};

export type Video = {
  type: "video";
  title: String;
  src: String;
  order: number;
  estimatedTime?: String;
};
export type ModuleItem = Lesson | Quiz | Video;

export type CourseModule = {
  title: String;
  description: String;
  moduleItems?: ModuleItem[];
};

export const courseModules: CourseModule[] = [
  {
    title: "Introduction",
    description:
      "Here I give you an overview about all topics we will cover in this course",
    moduleItems: [
      {
        type: "video",
        title: "Overview",
        order: 1,
        src: "",
        estimatedTime: "5:00",
      },
      {
        type: "lesson",
        title: "Notes & Resources",
        order: 2,
      },
      {
        type: "lesson",
        title: "What is CI/CD?",
        order: 3,
      },
      {
        type: "video",
        title: "Your first pipeline",
        src: "/",
        order: 4,
      },
      {
        type: "quiz",
        title: "CI/CD Basics",
        order: 5,
      },
      {
        type: "video",
        title: "Recap",
        order: 6,
        src: "/",
      },
    ],
  },
  {
    title: "Module 2: Setting Up the Environment",
    description:
      "Set up the necessary tools and environment for CI/CD in a Flutter project.",
  },
  {
    title: "Module 3: Continuous Integration (CI)",
    description:
      "Understand the importance of CI and implement a basic CI pipeline.",
  },
  {
    title: "Module 4: Continuous Deployment for Android",
    description:
      "Learn how to configure a pipeline for building and deploying Android apps.",
  },
  {
    title: "Module 5: Continuous Deployment for iOS",
    description: "Configure a pipeline for building and deploying iOS apps.",
  },
  {
    title: "Module 6: Automated Deployment",
    description:
      "Explore the concept of automated deployment for both Android and iOS.",
  },
  {
    title: "Module 7: Advanced CI/CD Practices",
    description:
      "Dive into advanced CI/CD practices, including automated builds on tag creation.",
  },
  {
    title: "Module 8: Real-world Project and Troubleshooting",
    description:
      "Apply CI/CD to a real-world Flutter project and troubleshoot common issues.",
  },
  {
    title: "Module 9: Conclusion and Next Steps",
    description:
      "Recap key concepts and provide resources for further learning.",
  },
];
