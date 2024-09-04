import { services } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import ServicesCard from "./ServicesCard";

const Business = () => {
  return (
    <section id="services" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You focus on your needs, we’ll handle the rest.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Elevate Pesa, we ensure that all your gas and water delivery needs
          are met with efficiency and reliability. Explore our wide range of
          services and enjoy seamless delivery right to your doorstep.
        </p>

        <Button styles={"mt-10"} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((feature, index) => (
          <ServicesCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
