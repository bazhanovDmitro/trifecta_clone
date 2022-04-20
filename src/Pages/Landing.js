import Image from "../Components/Image";
import landing_image from "../Assets/Images/landing_container.jpeg";
import style from "../Assets/Styles/Landing/landingBody.module.scss";
import buttonStyle from "../Assets/Styles/Common/buttons.module.scss";
import LandingPart1 from "../Layouts/Landing/LandingPart1";
import PartnersBanner from "../Layouts/Landing/PartnersBanner";
import LandingPart2 from "../Layouts/Landing/LandingPart2";
import FakeCounterLayout from "../Layouts/Landing/FakeCounterLayout";
import GalleryLayout from "../Layouts/Landing/GalleryLayout";
import TeamBanner from "../Layouts/Landing/TeamBanner";
import { teamObject } from "../Utils/team";

export default function Landing() {
  return (
    <>
      <Image
        style={style}
        imageObject={{
          backgroundImage: `url(${landing_image})`,
        }}
      />
      <LandingPart1 style={style} buttonStyle={buttonStyle} />
      <PartnersBanner style={style} />
      <LandingPart2 style={style} buttonStyle={buttonStyle} />
      <FakeCounterLayout style={style} />
      <GalleryLayout style={style} />
      <TeamBanner style={style} team={teamObject} />
    </>
  );
}
