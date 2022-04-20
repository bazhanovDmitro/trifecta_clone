import EmployeeCard from "../../Components/EmployeeCard";
import { MEET_TEAM_TEXT, ORANGE_BANNER_TEXT } from "../../Constants/text";

export default function TeamBanner({ team, style }) {
  return (
    <div className={style?.teamBanner}>
      <h3 className={style?.header}>
        {ORANGE_BANNER_TEXT}
        <span>{MEET_TEAM_TEXT}</span>
      </h3>
      {team.map((member) => (
        <EmployeeCard
          image={member.image}
          name={member.name}
          position={member.position}
        />
      ))}
    </div>
  );
}
