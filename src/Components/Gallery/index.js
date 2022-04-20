import { useState } from "react";
import style from "../../Assets/Styles/Common/gallery.module.scss";
import GalleryItem from "./GalleryItem";
import { ReactComponent as Arrow } from "../../Assets/svg/arrowRight.svg";
import GallerySwitcher from "./GallerySwitcher";

export default function Gallery({ images }) {
  const [currentImage, setImage] = useState(0);

  const onBubleClick = (index) => {
    setImage(index);
  };

  const changeImage = (directionForward) => {
    if (directionForward && currentImage < images.length - 1) {
      setImage((prev) => prev + 1);
    } else if (!directionForward && currentImage > 0)
      setImage((prev) => prev - 1);
    else if (!directionForward && currentImage === 0)
      setImage((prev) => prev + (images.length - 1));
    else if (directionForward && currentImage === images.length - 1)
      setImage((prev) => prev - (images.length - 1));
  };

  return (
    <div className={style.gallery}>
      <div className={style?.arrowLeft} onClick={() => changeImage(false)}>
        <Arrow />
      </div>
      <div className={style.holder}>
        <div
          className={style.container}
          style={{ marginLeft: `-${currentImage * 1010}px` }}
        >
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              src={image.image}
              text={image.text}
              name={image.name}
              header={image.header}
              alt="gallery"
              className={style.image}
              style={style}
            />
          ))}
        </div>
      </div>
      <div className={style?.arrowRight} onClick={() => changeImage(true)}>
        <Arrow />
      </div>
      <GallerySwitcher
        images={images}
        style={style}
        current={currentImage}
        onSwitch={onBubleClick}
      />
    </div>
  );
}
