import { ReactComponent as Profile } from "../Assets/svg/profile.svg";
import { ReactComponent as Cart } from "../Assets/svg/cart.svg";

export const headerLinks = [
  { text: `MEAL PLANS`, link: `/meal-plans` },
  { text: `HOW IT WORKS`, link: `/how-it-works` },
  { text: `RESOURCES`, link: `/resources` },
  { text: `TESTIMONIALS`, link: `/testimonials` },
  { text: `APP`, link: `/app` },
  { text: `FAQ`, link: `/faq` },
];

export const headerUserLinks = [
  { text: <Profile />, link: `user/profile` },
  { text: <Cart />, link: `user/cart` },
];

export const footerLink = [
  { text: `Our Story`, link: `/story` },
  { text: `Nutrition And Fitness`, link: `/nutrition` },
  { text: `Trifecta Health`, link: `/healt` },
  { text: `Meals`, link: `/meals` },
  { text: `Partners`, link: `/partners` },
  { text: `Testimonials`, link: `/what-is-that` },
  { text: `How It Works`, link: `/how-it-works` },
  { text: `Press`, link: `/press` },
  { text: `Careers`, link: `/careers` },
];
