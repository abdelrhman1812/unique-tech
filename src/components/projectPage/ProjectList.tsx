import { mock_projects } from "../data/mock-projects";
import SingleProject from "./SingleProject";

// interface Project {
//   id: number;
//   image: StaticImageData;
//   title: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     image: projectImg1,
//     title: "WEBSITE - Increasing your productivity",
//   },
//   {
//     id: 2,
//     image: projectImg1,
//     title: "WEBSITE - Boosting your efficiency",
//   },
//   {
//     id: 3,
//     image: projectImg1,
//     title: "WEBSITE - Creativity unleashed",
//   },
//   {
//     id: 4,
//     image: projectImg1,
//     title: "WEBSITE - Increasing your productivity",
//   },
//   {
//     id: 5,
//     image: projectImg1,
//     title: "WEBSITE - Boosting your efficiency",
//   },
//   {
//     id: 6,
//     image: projectImg1,
//     title: "WEBSITE - Creativity unleashed",
//   },
// ];

export const ProjectList = () => {
  return (
    <section className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2">
      {mock_projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </section>
  );
};
