import { StaticImageData } from "next/image";

export interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Projects {
  id: number;
  title: string;
  description: string;
  images: (StaticImageData | string)[];
  imageCover: StaticImageData | string;
  links: string;
  type: string;
}
