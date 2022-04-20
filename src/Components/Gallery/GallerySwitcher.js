export default function GallerySwitcher({ onSwitch, current, images, style }) {
  return (
    <div className={style?.switcher}>
      {images.map((img, index) => (
        <div
          key={index}
          className={index === current ? style?.activeBuble : style?.buble}
          onClick={() => onSwitch(index)}
        ></div>
      ))}
    </div>
  );
}
