import Header from "../Layouts/Header";
import headerStyle from "../Assets/Styles/Landing/header.module.scss";
import Image from "../Components/Image";
import landing_image from "../Assets/Images/landing_container.jpeg";
import style from "../Assets/Styles/Landing/landingBody.module.scss";

export default function Landing() {
  return (
    <>
      <Header style={headerStyle} />
      <body>
        <Image
          style={style}
          imageObject={{
            backgroundImage: `url(${landing_image})`,
          }}
        />
      </body>
    </>
  );
}
