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
