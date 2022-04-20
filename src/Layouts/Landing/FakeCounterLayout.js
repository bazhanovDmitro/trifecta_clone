import FakeCounter from "../../Components/FakeCounter";
import {
  LANDING_COUNTER_HEADER,
  LANDING_COUNTER_TEXT,
  POUNDS_LOST,
} from "../../Constants/text";

export default function FakeCounterLayout({ style }) {
  const date = new Date();
  const today = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <div className={style?.counterContainer}>
      <div className={style?.holder}>
        <h3 className={style?.header}>{LANDING_COUNTER_HEADER}</h3>
        <p className={style?.paragraph}>{LANDING_COUNTER_TEXT}</p>
        <FakeCounter
          style={style}
          startNumber={3495000}
          label={
            <>
              <h3 className={style?.fakeCounterLabel}>{POUNDS_LOST}</h3>
              <p
                className={style?.fakeCounterParagrahp}
              >{`(As of ${today})`}</p>
            </>
          }
        />
      </div>
    </div>
  );
}
