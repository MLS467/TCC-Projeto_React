import CardRange from "./CardRange";
import { data } from "../data";

const SectionRange = () => {
  return (
    <div
      style={{
        width: "100% !important",
        height: "400px",
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        flexWrap: "wrap",
        padding: "40px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map(({ icon, title, description }, index) => {
        return (
          <CardRange
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default SectionRange;
