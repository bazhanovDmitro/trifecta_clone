import s from "../../Assets/Styles/Common/emailInput.module.scss";

export default function EmailInput({ customStyle }) {
  const style = customStyle ? customStyle : s;

  return (
    <div className={style.emailInput}>
      <input className={style.input} type="email" placeholder="Email Address" />
      <button className={style.submit}>SIGN UP</button>
    </div>
  );
}
