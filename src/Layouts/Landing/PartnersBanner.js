import { ReactComponent as Banner } from "../../Assets/Images/logos.svg";

export default function PartnersBanner({ style }) {
  return <div className={style.banner}>{<Banner />}</div>;
}
