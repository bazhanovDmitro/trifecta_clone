import buttonStyles from "../../Assets/Styles/Common/buttons.module.scss";
import Gallery from "../../Components/Gallery";
import { GALLERY_HEADER, GET_STARTED } from "../../Constants/text";
import { landingImages } from "../../Utils/galleryImages";

export default function GalleryLayout({ style }) {
  return (
    <div className={style?.galleryHolder}>
      <h3 className={style?.header}>{GALLERY_HEADER}</h3>
      <Gallery images={landingImages} />
      <button className={buttonStyles.orange}>{GET_STARTED}</button>
    </div>
  );
}
