import { assets } from "~/assets";
import { ClientProject } from "./types";

export * from "./types";

export const clientProjects: ClientProject[] = [
  {
    id: "wins",
    name: "Wins",
    url: "https://forms.co/wins",
    images: [
      assets.clientProjects.wins.homeImage,
      assets.clientProjects.wins.missionSectionImage,
      assets.clientProjects.wins.photoGridImage,
      assets.clientProjects.wins.codesSectionImage,
      assets.clientProjects.wins.teaserGridImage,
      assets.clientProjects.wins.productImage,
      assets.clientProjects.wins.sizeChartImage,
    ],
  },
  {
    id: "awaken",
    name: "Awaken",
    url: "https://4w4k3n.com",
    images: [
      assets.clientProjects.awaken.homeImage,
      assets.clientProjects.awaken.aboutImage,
      assets.clientProjects.awaken.aboutTextImage,
      assets.clientProjects.awaken.gameEnterImage,
      assets.clientProjects.awaken.game1Image,
      assets.clientProjects.awaken.game2Image,
      assets.clientProjects.awaken.game3Image,
      assets.clientProjects.awaken.game4Image,
    ],
  },
  {
    id: "amriel",
    name: "Amriel",
    url: "https://amriel.org",
    images: [
      assets.clientProjects.amriel.homeImage,
      assets.clientProjects.amriel.productImage,
      assets.clientProjects.amriel.productsImage,
      assets.clientProjects.amriel.galleryImage,
      assets.clientProjects.amriel.createImage,
      assets.clientProjects.amriel.freeImage,
      assets.clientProjects.amriel.aboutImage,
    ],
  },
  {
    id: "mokk",
    name: "Mokk",
    url: "https://mokk.co",
    images: [
      assets.clientProjects.mokk.home1Image,
      assets.clientProjects.mokk.home2Image,
      assets.clientProjects.mokk.home3Image,
    ],
  },
  {
    id: "chalksheads",
    name: "Chalkhead's Playground",
    url: "https://chalkheadsplayground.com",
    images: [
      assets.clientProjects.chalkheads.bootImage,
      assets.clientProjects.chalkheads.homeImage,
      assets.clientProjects.chalkheads.preview1Image,
      assets.clientProjects.chalkheads.preview2Image,
      assets.clientProjects.chalkheads.preview3Image,
      assets.clientProjects.chalkheads.watchImage,
      assets.clientProjects.chalkheads.browseImage,
    ],
  },
  {
    id: "comunal",
    name: "Comunal",
    url: "https://comunal.nyc",
    images: [
      assets.clientProjects.comunal.homeImage,
      assets.clientProjects.comunal.menuImage,
      assets.clientProjects.comunal.privacyImage,
      assets.clientProjects.comunal.termsImage,
    ],
  },
];
