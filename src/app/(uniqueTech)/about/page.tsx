import AboutPage from "@/components/aboutPage/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Unique Tech, where imagination and expertise converge to create innovative design solutions.",
  keywords: "About, Unique Tech, technology solutions, innovation",
  twitter: {
    card: "summary_large_image",
    site: "@UniqueTech",
    title: "About Us - Unique Tech",
    description:
      "Learn more about Unique Tech, where imagination and expertise converge to create innovative design solutions.",
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
    title: "About Us - Unique Tech",
    description:
      "Learn more about Unique Tech, where imagination and expertise converge to create innovative design solutions.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Unique Tech Logo",
        width: 320,
        height: 320,
      },
    ],
    url: "https://unique-tech-six.vercel.app/about",
  },
};

const About = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default About;
