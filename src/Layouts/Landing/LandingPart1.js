import {
  LANDING_HEADER,
  LANDING_PARAGRAPH,
  SHOP_MEAL_TEXT,
  TAKE_THE_QUIZ,
} from "../../Constants/text";

export default function LandingPart1({ style, buttonStyle }) {
  return (
    <div className={style.container1}>
      <h1 className={style.header1}>{LANDING_HEADER}</h1>
      <p className={style.paragraph}>{LANDING_PARAGRAPH}</p>
      <div className={style.buttons}>
        <button className={buttonStyle.orange}>{SHOP_MEAL_TEXT}</button>
        <button className={buttonStyle.darkBlue}>{TAKE_THE_QUIZ}</button>
      </div>
    </div>
  );
}
