import s from "../../Assets/Styles/Common/employeeCard.module.scss";

export default function EmployeeCard({ customStyle, image, name, position }) {
  const style = customStyle ? customStyle : s;

  return (
    <div className={style?.card}>
      <img className={style?.image} src={image} alt="team member" />
      <h4 className={style?.name}>{name}</h4>
      <p className={style?.position}>{position}</p>
    </div>
  );
}
