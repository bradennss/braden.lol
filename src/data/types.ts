export type MediaType = "image" | "video";

export type Media = {
  type: MediaType;
  src: string;
  alt?: string;
  width: number;
  height: number;
};

export type ClientProject = {
  id: string;
  name: string;
  url?: string;
  media: Media[];
};

export type PersonalProject = {
  id: string;
  name: string;
  url?: string;
  media: Media[];
};
