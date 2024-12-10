import React from "react";
import styles from '@/public/styles/manpower.module.css';
import Manpower from "@/app/components/manpower";
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import { useTranslation } from 'next-i18next';

const ManpowerAndTraining: React.FC = () => {
  const { t } = useTranslation();

  const manpowerText = `
    We have a training school where fabricators and <br />
    welders are trained and qualified. The training includes <br />
    the following welding processes: <br />
    <br />
    SMAW <br />
    FCAW <br />
    GTAW <br />
    SAW <br />
    <br />
    Our training program extends to other specific <br />
    disciplines such as scaffold, machine operators, Cranes <br />
    operators, Safety training, First Aid, Inspection <br />
    training, English, Excel, Matrix, Drawing Software, <br />
    Injury incident free (IFF), Fire Fighting among others.<br />
    We also collaborate with local universities and <br />
    institutes, delivering workshops and presentations, <br />
    with the aim of hunting local talents.
  `
  return (
    <>
      {/* Banner Section */}
      <section className={`${styles.containerBanner} `}>
        <img className={`${styles.banner} `} src="/images/header/manpower.png" alt="Manpower and Training" />
        <div className={`${styles.leftTittle}`}>
          <p className={`${styles.bannerTittle}`}>
            <span>{t('manpower_and_training')}</span>
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-play-circle" aria-hidden="true"></i>
            <p
              className={`${styles.findOutMore} `}
              style={{
                display: "inline-block",
                paddingLeft: "2%",
                fontWeight: 500,
              }}
            >
              {t('find_out_more')}
            </p>
          </div>
        </div>

        <div className={`${styles.arrows} `}>
          <div className={`col-md-6 ${styles.arrowP} `}>
            <p>{t('manpower_and_training')}</p>
          </div>
        </div>
        <i className={`fas fa-chevron-right ${styles.right} `} aria-hidden="true"></i>
        <SocialIconsBanner styles={styles} />
      </section>

      {/* Intro Section */}
      <section
        className="col-md-12"
        style={{
          padding: "0px",
          marginBottom: "12%",
          marginTop: "5%",
          // height: "256px",
        }}
      >
        <section className={`col-md-6 ${styles.intro} `}>
          <div className={`col-md-6 ${styles.introText} `}>
            <div className="separator">
              <div className="line"></div>
              <h6>{t('manpower_and_training')}</h6>
            </div>
          </div>
        </section>

        <section className={`col-md-6 ${styles.introSection} `}>
          <div className={`col-md-6 ${styles.introDescription} `}>
            <div style={{ fontWeight: 400, color: "#C4C4C4" }} 
              dangerouslySetInnerHTML={{ __html: manpowerText }}
            />
          </div>
        </section>
      </section>
      <Manpower styles={styles} />
    </>
  );
};

export default ManpowerAndTraining;
