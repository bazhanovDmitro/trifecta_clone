export default function TextSection({ style, text, name, header }) {
  return (
    <div className={style?.textSection}>
      <p className={style?.text}>{text}</p>
      <span className={style?.name}>- {name}</span>
      <h3 className={style?.header}>{header}</h3>
    </div>
  );
}
