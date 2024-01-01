import styles from "@/styles/infostyles.module.css";
import InfoCardlist from "../compo/infocardlist/InfoCardlist";
import InfoMenu from "../compo/infomenu/InfoMenu";
const infoCategory = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.infocategorytitle}>New Tech</h1>
      <div className={styles.infocategorycontent}>
        <InfoCardlist />
        <InfoMenu />
      </div>
    </div>
  );
};

export default infoCategory;
