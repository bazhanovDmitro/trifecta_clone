import { ReactComponent as Magnifier } from "../../Assets/svg/magnifier.svg";
import { SEARCH_PLACEHOLDER } from "../../Constants/text";

export default function Search({ style }) {
  return (
    <div className={style?.searchHolder}>
      <Magnifier className={style?.magnifier} />
      <input className={style?.input} placeholder={SEARCH_PLACEHOLDER} />
    </div>
  );
}
