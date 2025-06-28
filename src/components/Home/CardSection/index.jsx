import { additionalData } from "../data";
import InfoCard from "../Card";

const CardSection = () => {
  return (
    <>
      {additionalData.map(({ icon, title, description }, index) => {
        return (
          <InfoCard
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        );
      })}
    </>
  );
};

export default CardSection;
