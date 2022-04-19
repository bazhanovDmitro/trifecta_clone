import { Link } from "react-router-dom";

export default function SnowBall({ style, src, alt, header, text, link }) {
  return (
    <div className={style?.snowBall}>
      <Link to={link}>
        <img src={src} alt={alt} className={style?.image} />
      </Link>
      <h3 className={style?.header3}>{header}</h3>
      <p className={style?.text}>{text}</p>
    </div>
  );
}
