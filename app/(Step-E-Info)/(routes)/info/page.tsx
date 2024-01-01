import styles from "@/styles/infostyles.module.css";
import InfoFeatured from "./compo/infofeatured/InfoFeatured";
import InfoCategorylist from "./compo/infocategorylist/InfoCategorylist";
import InfoCardlist from "./compo/infocardlist/InfoCardlist";
import InfoMenu from "./compo/infomenu/InfoMenu";
const info = () => {
  return (
    <div className={styles.container}>
      <InfoFeatured />
      <InfoCategorylist />
      <div className={styles.infocontent}>
        <InfoCardlist />
        <InfoMenu />
      </div>
    </div>
  );
};

export default info;
