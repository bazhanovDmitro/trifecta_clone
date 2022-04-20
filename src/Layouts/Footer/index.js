import style from "../../Assets/Styles/Common/footer.module.scss";
import LinkList from "../../Components/LinkList";
import { ABOUT_PRODUCT, CONTACT_US } from "../../Constants/text";
import { HIGHLITE_EFFECT } from "../../Utils/codes";
import { footerLink } from "../../Utils/links";

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
      </div>
    </div>
  );
}
