import TextSection from "./TextSection";

export default function GalleryItem({ style, src, text, name, header }) {
  return (
    <div className={style?.item}>
      <img src={src} alt="gallery" className={style?.image} />
      <TextSection style={style} text={text} name={name} header={header} />
    </div>
  );
}
