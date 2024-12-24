import { mock_projects } from "../data/mock-projects";
import SingleProject from "./SingleProject";

export const ProjectList = () => {
  return (
    <section className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2">
      {mock_projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </section>
  );
};
