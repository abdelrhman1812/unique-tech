import ContactPage from "@/components/contactPage/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Unique Tech",
  description:
    "Get in touch with Unique Tech for innovative technology solutions and design expertise. We would love to hear from you.",
  keywords:
    "Contact, Unique Tech, technology solutions, innovation, get in touch",
  twitter: {
    card: "summary_large_image",
    site: "@UniqueTech",
    title: "Contact Us - Unique Tech",
    description:
      "Get in touch with Unique Tech for innovative technology solutions and design expertise. We would love to hear from you.",
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
    title: "Contact Us - Unique Tech",
    description:
      "Get in touch with Unique Tech for innovative technology solutions and design expertise. We would love to hear from you.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Unique Tech Logo",
        width: 320,
        height: 320,
      },
    ],
    url: "https://unique-tech-six.vercel.app/contact",
  },
};

const page = () => {
  return (
    <div className="bg-[#F2F3F5]">
      <ContactPage />
    </div>
  );
};

export default page;
