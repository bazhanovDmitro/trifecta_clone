import food from "../Assets/Images/food_2.jpeg";
import community from "../Assets/Images/community_1.jpg";
import track from "../Assets/Images/track_1.jpg";
import {
  SNOWBALL_1_TEXT,
  SNOWBALL_1_HEADER,
  SNOWBALL_2_HEADER,
  SNOWBALL_2_TEXT,
  SNOWBALL_3_HEADER,
  SNOWBALL_3_TEXT,
} from "../Constants/text";

export const landing = [
  {
    src: food,
    alt: "food",
    header: SNOWBALL_1_HEADER,
    text: SNOWBALL_1_TEXT,
    link: "/meal-plans",
  },
  {
    src: community,
    alt: "community",
    header: SNOWBALL_2_HEADER,
    text: SNOWBALL_2_TEXT,
    link: "/how-it-works",
  },
  {
    src: track,
    alt: "track",
    header: SNOWBALL_3_HEADER,
    text: SNOWBALL_3_TEXT,
    link: "/resources",
  },
];
