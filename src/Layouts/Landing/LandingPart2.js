import SnowBall from "../../Components/SnowBall";
import { HOW_IT_WORKS_TEXT, LEARN_MORE } from "../../Constants/text";
import { landing as snowballsInfo } from "../../Utils/snowBallObjects";
import snowballStyle from "../../Assets/Styles/Common/snowBall.module.scss";

export default function LandingPart2({ style, buttonStyle }) {
  return (
    <div className={style.container2}>
      <h2 className={style.header2}>{HOW_IT_WORKS_TEXT}</h2>
      <div className={style.snowBalls}>
        {snowballsInfo.map((snowball, index) => (
          <SnowBall
            key={index}
            style={snowballStyle}
            src={snowball.src}
            alt={snowball.alt}
            header={snowball.header}
            text={snowball.text}
            link={snowball?.link}
          />
        ))}
      </div>
      <button className={buttonStyle.darkBlue}>{LEARN_MORE}</button>
    </div>
  );
}
