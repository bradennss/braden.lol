import { StaticImageData } from "next/image";

export type ClientProject = {
  id: string;
  name: string;
  url?: string;
  images: (StaticImageData | string)[];
};
