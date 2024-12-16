import {
  IllustrationFeaturesTab1,
  IllustrationFeaturesTab2,
  IllustrationFeaturesTab3,
} from "../../asstes/images";
import { Features } from "./type";

export const features: Features = [
  {
    label: "Simple Bookmarking",
    content: {
      img: {
        src: IllustrationFeaturesTab1,
        alt: "illustration-simple-bookmarking",
      },
      title: "Bookmark in one click",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
  },
  {
    label: "Speedy Searching",
    content: {
      img: {
        src: IllustrationFeaturesTab2,
        alt: "illustration-speedy-searching",
      },
      title: "Intelligent search",
      desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
  },
  {
    label: "Easy Sharing",
    content: {
      img: {
        src: IllustrationFeaturesTab3,
        alt: "illustration-easy-sharing",
      },
      title: "Share your bookmarks",
      desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  },
];
