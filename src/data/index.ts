import { assets } from "~/assets";
import { ClientProject } from "./types";

export * from "./types";

export const clientProjects: ClientProject[] = [
  {
    id: "wins",
    name: "Wins",
    url: "https://forms.co/wins",
    media: [
      { type: "video", src: assets.clientProjects.wins.homeVideo },
      { type: "image", src: assets.clientProjects.wins.homeImage },
      { type: "image", src: assets.clientProjects.wins.missionSectionImage },
      { type: "image", src: assets.clientProjects.wins.photoGridImage },
      { type: "image", src: assets.clientProjects.wins.codesSectionImage },
      { type: "image", src: assets.clientProjects.wins.teaserGridImage },
      { type: "image", src: assets.clientProjects.wins.productImage },
      { type: "image", src: assets.clientProjects.wins.sizeChartImage },
    ],
  },
  {
    id: "awaken",
    name: "Awaken",
    url: "https://4w4k3n.com",
    media: [
      { type: "video", src: assets.clientProjects.awaken.homeVideo },
      { type: "image", src: assets.clientProjects.awaken.homeImage },
      { type: "image", src: assets.clientProjects.awaken.aboutImage },
      { type: "image", src: assets.clientProjects.awaken.aboutTextImage },
      { type: "image", src: assets.clientProjects.awaken.gameEnterImage },
      { type: "image", src: assets.clientProjects.awaken.game1Image },
      { type: "image", src: assets.clientProjects.awaken.game2Image },
      { type: "image", src: assets.clientProjects.awaken.game3Image },
      { type: "image", src: assets.clientProjects.awaken.game4Image },
    ],
  },
  {
    id: "amriel",
    name: "Amriel",
    url: "https://amriel.org",
    media: [
      { type: "video", src: assets.clientProjects.amriel.homeVideo },
      { type: "image", src: assets.clientProjects.amriel.homeImage },
      { type: "image", src: assets.clientProjects.amriel.productImage },
      { type: "image", src: assets.clientProjects.amriel.productsImage },
      { type: "image", src: assets.clientProjects.amriel.galleryImage },
      { type: "image", src: assets.clientProjects.amriel.createImage },
      { type: "image", src: assets.clientProjects.amriel.freeImage },
      { type: "image", src: assets.clientProjects.amriel.aboutImage },
    ],
  },
  {
    id: "mokk",
    name: "Mokk",
    url: "https://mokk.co",
    media: [
      { type: "video", src: assets.clientProjects.mokk.homeVideo },
      { type: "image", src: assets.clientProjects.mokk.home1Image },
      { type: "image", src: assets.clientProjects.mokk.home2Image },
      { type: "image", src: assets.clientProjects.mokk.home3Image },
    ],
  },
  {
    id: "chalkheads",
    name: "Chalkhead's Playground",
    url: "https://chalkheadsplayground.com",
    media: [
      { type: "video", src: assets.clientProjects.chalkheads.bootVideo },
      { type: "image", src: assets.clientProjects.chalkheads.bootImage },
      { type: "image", src: assets.clientProjects.chalkheads.homeImage },
      { type: "image", src: assets.clientProjects.chalkheads.preview1Image },
      { type: "image", src: assets.clientProjects.chalkheads.preview2Image },
      { type: "image", src: assets.clientProjects.chalkheads.preview3Image },
      { type: "image", src: assets.clientProjects.chalkheads.watchImage },
      { type: "image", src: assets.clientProjects.chalkheads.browseImage },
    ],
  },
  {
    id: "comunal",
    name: "Comunal",
    url: "https://comunal.nyc",
    media: [
      { type: "image", src: assets.clientProjects.comunal.homeImage },
      { type: "image", src: assets.clientProjects.comunal.menuImage },
      { type: "image", src: assets.clientProjects.comunal.privacyImage },
      { type: "image", src: assets.clientProjects.comunal.termsImage },
    ],
  },
];
