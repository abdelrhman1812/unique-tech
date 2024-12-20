import { Projects } from "@/lib/types";
import img2 from "../../../public/assets/egypt-12.png";
import img1 from "../../../public/assets/image 1.png";
export const mock_projects: Projects[] = [
  {
    id: 1,
    title: "Cyber Security Website 1!",
    description:
      "Dynamic cybersecurity firm with a passion for innovation and a relentless dedication to cybersecurity excellence. Our team of seasoned experts possesses a deep understanding of the evolving cyber threat landscape, and we leverage this knowledge to deliver customized, proactive, and resilient security solutions.",
    images: [img1, img2],
    imageCover: img1,
    links: "/",
  },
  {
    id: 2,
    title: "Cyber Security Website 2!",
    description:
      "Dynamic cybersecurity firm with a passion for innovation and a relentless dedication to cybersecurity excellence. Our team of seasoned experts possesses a deep understanding of the evolving cyber threat landscape, and we leverage this knowledge to deliver customized, proactive, and resilient security solutions.",
    images: [img2, img1],
    imageCover: img1,
    links: "/",
  },
];
