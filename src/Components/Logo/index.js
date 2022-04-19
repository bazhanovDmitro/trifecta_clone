import { ReactComponent as LogoImage } from "../../Assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { ROOT } from "../../Constants/routes";

export default function Logo({ style }) {
  return (
    <div className={`${style.logo}`}>
      <Link to={ROOT}>
        <LogoImage />
      </Link>
    </div>
  );
}
