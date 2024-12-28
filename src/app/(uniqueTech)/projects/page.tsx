import ProjectPage from "@/components/projectPage/ProjectPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Unique Tech",
  description:
    "Explore the innovative and cutting-edge projects by Unique Tech. See how we deliver technology solutions and creative design.",
  keywords: "Projects, Unique Tech, technology solutions, innovation, design",
  twitter: {
    card: "summary_large_image",
    site: "@UniqueTech",
    title: "Projects - Unique Tech",
    description:
      "Explore the innovative and cutting-edge projects by Unique Tech. See how we deliver technology solutions and creative design.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Unique Tech Logo",
        width: 320,
        height: 320,
      },
    ],
  },
  openGraph: {
    title: "Projects - Unique Tech",
    description:
      "Explore the innovative and cutting-edge projects by Unique Tech. See how we deliver technology solutions and creative design.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Unique Tech Logo",
        width: 320,
        height: 320,
      },
    ],
    url: "https://unique-tech-six.vercel.app/projects",
  },
};

const Projects = () => {
  return <ProjectPage />;
};

export default Projects;
