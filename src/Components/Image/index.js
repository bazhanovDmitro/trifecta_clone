import "../../Assets/Images/landing_container.jpeg";

export default function Image({ style, imageObject }) {
  return <div className={style?.imageContainer} style={imageObject}></div>;
}
