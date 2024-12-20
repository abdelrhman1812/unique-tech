import Collaborate from "../homePage/Collaborate/Collaborate";
import Reviews from "../homePage/Reviews/Reviews";
import { ProjectList } from "./ProjectList";
import ProjectPageTitle from "./ProjectPageTitle";

const ProjectPage = () => {
  return (
    <main className="py-[40px]">
      <div className="container">
        <ProjectPageTitle />
        <ProjectList />
      </div>
      <Collaborate />
      <Reviews />
    </main>
  );
};

export default ProjectPage;
