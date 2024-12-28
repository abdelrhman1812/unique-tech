import { mock_projects } from "@/components/data/mock-projects";

const sitemap = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const staticRoutes = [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/projects` },
    { url: `${baseUrl}/contact` },
  ];

  const dynamicRoutes = mock_projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
  }));

  return [...staticRoutes, ...dynamicRoutes];
};

export default sitemap;
