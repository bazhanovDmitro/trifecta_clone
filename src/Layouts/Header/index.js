import LinkList from "../../Components/LinkList";
import Logo from "../../Components/Logo";
import { headerLinks, headerUserLinks } from "../../Utils/links";
import { UNDERLINE_EFFECT } from "../../Utils/codes";
import Search from "../../Components/Search";
import style from "../../Assets/Styles/Landing/header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.groupLeft}>
        <Logo style={style} />
        <LinkList
          links={headerLinks}
          style={style}
          hoverCode={UNDERLINE_EFFECT}
        />
      </div>
      <div className={style.groupRight}>
        <Search style={style} />
        <LinkList links={headerUserLinks} style={style} />
      </div>
    </header>
  );
}
