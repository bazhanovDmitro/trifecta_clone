import { Link } from "react-router-dom";
import LinkHover from "./LinkHover";

export default function LinkList({ links, style, hoverCode = 0, markedFirst }) {
  const underline = `link_${hoverCode}`;
  const highlited = `highlited_${hoverCode}`;

  return (
    <div className={style?.linkList}>
      {links.map((link, index) => (
        <Link
          key={index}
          className={
            index === 0 && markedFirst ? style[highlited] : style[underline]
          }
          to={link.link}
        >
          {link.text}
          <LinkHover style={style} />
        </Link>
      ))}
    </div>
  );
}
