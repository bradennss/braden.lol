export type MediaType = "image" | "video";

export type Media = {
  type: MediaType;
  src: string;
  alt?: string;
};

export type ClientProject = {
  id: string;
  name: string;
  url?: string;
  media: Media[];
};
