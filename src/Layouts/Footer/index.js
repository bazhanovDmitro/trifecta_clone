import style from "../../Assets/Styles/Common/footer.module.scss";
import LinkList from "../../Components/LinkList";
import {
  ABOUT_PRODUCT,
  CONTACT_US,
  JOIN_COMMUNITY,
  JOIN_COMMUNITY_TEXT,
} from "../../Constants/text";
import { HIGHLITE_EFFECT } from "../../Utils/codes";
import { footerLink } from "../../Utils/links";
import { contactUsList } from "../../Utils/arrays";
import magazine from "../../Assets/Images/magazine.jpg";
import EmailInput from "../../Components/EmailInput";

export default function Footer() {
  const firstHalf = footerLink.slice(0, footerLink.length / 2);
  const secondHalf = footerLink.slice(footerLink.length / 2);

  return (
    <div className={style.footer}>
      <div className={style.firstBlock}>
        <h5>{ABOUT_PRODUCT}</h5>
        <div className={style.listBlock}>
          <LinkList
            style={style}
            hoverCode={HIGHLITE_EFFECT}
            links={secondHalf}
          />
          <LinkList
            style={style}
            hoverCode={HIGHLITE_EFFECT}
            links={firstHalf}
          />
        </div>
      </div>
      <div className={style.contactUs}>
        <h5>{CONTACT_US}</h5>
        <ul className={style.contactUsList}>
          {contactUsList.map((item, index) => (
            <li key={index}>
              {item.image}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.joinCommunity}>
        <div className={style.textBlock}>
          <h5 className={style.header}>{JOIN_COMMUNITY}</h5>
          <p className={style.text}>{JOIN_COMMUNITY_TEXT}</p>
        </div>
        <img className={style.magazine} src={magazine} alt="magazine" />
        <EmailInput />
      </div>
    </div>
  );
}
