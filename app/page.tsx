
"use client"
import Image from "next/image";
import styles from '@/public/styles/home.module.css';
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import { useTranslation } from 'next-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const introText = `The Estaleiro Atlantico do Amboim (EAA), is a shipyard and energy industry in Angola. 
  The manufacturing yard is located at Praia do Kissonde, Porto Amboim, Kwanza-Sul, Angola. 
  Specializes in the construction of underwater structures and the manufacture of support 
  equipment for the oil and gas industry.`;

  const yardUtilitiesText = `<ul>
    <li>Offices (1050 m2) </li>
    <li>Restaurant (300 seats) </li>
    <li>Own satellite connection </li>
    <li>Fuel storage (60m3) </li>
    <li>Fuel purification unit </li>
    <li>E-power plant (8mW) </li>
    <li>2x RO-water plant (160m3/d) </li>
    <li>Anaerobe sewer treatment plant </li>
    <li>Medical facilities with yard hospital (2 beds) </li>
    <li>Ambulance </li>
    <li>Fire fighting truck </li>
    <li>EAATC (Estaleiro Atlântico do Amboim Training  </li>
    <li>Centre) capacity 40 trainees </li>
    <li>EAASC (Estaleiro Atlântico do Amboim Safety Centre) </li>
    <li>capacity 16 trainees </li>
    <li>Maintenance building</li>
    <li>Car wash area with oil/water separator </li>
  </ul>`

  const ourYardText = `<ul>
    <li>150.000 m2 (15 ha), loadbearing 90 t/m2 </li>
    <li>Direct acess to open sea</li>
    <li>Quay 250m, 10.6m water depth</li>
    <li>Quay load 5 t/m2 - 10 t/m2</li>
    <li>Breakwater protection </li>
    <li>Connected by road transport to Luanda</li>
    </ul>
  `

  const missionVisionText = `
  The Vision, Values and Mission of EAA, LDA materialize the company's ambition to be a reference in society, contributing decisively to the development of the oil sector and other markets.
  `

  return (
    <>
      <section className={`${styles.containerBanner} `}>
        <Image
          alt="Next.js logo"
          className={`${styles.banner}`}
          src="/images/EAA LDA D (2 de 9).jpg"
          width={1900}
          height={800}
        />
        <div className={`${styles.leftTittle}`}>
          <p className={`${styles.bannerTittle}`}>
            <span>ESTALEIRO ATLÂNTICO DO AMBOIM</span>
          </p>
          <i className="fas fa-play-circle" aria-hidden="true"></i>
          <a className={`${styles.findOutMore} `}  style={{ display: 'inline-block', paddingLeft: '2%', fontWeight: '500' }}> 
            {t('find_out_more')}
          </a>
        </div>

        <div className={`${styles.topArrowsContainer} `}>
          <i className="fas fa-chevron-left left" aria-hidden="true"></i>
          <div className={`arrows`}>
            <div className={`col-md-6 ${styles.arrowP} `}>
              <p>{t('introduction_to_EAA')}</p>
            </div>
            <div className={`col-md-6 ${styles.arrowP} `}>
              <p>{t('general_yard_information')}</p>
            </div>
          </div>
          <i className="fas fa-chevron-right right" aria-hidden="true"></i>
        </div>

        <SocialIconsBanner styles={styles} />
      </section>
      <div className="col-md-10 col-md-offset-1 mt-3">
        <section className={`col-md-5 ${styles.introSectionLine} `}>
          <div className={`${styles.intro} `}>
            <div className={`${styles.introText} `}>
              <div className="separator">
                <div className="line"></div>
                <h6>{t('intro')}</h6>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-7" style={{ float: 'right' }}>
          <div className={`${styles.introTexto} `} dangerouslySetInnerHTML={{ __html: introText }}></div>
        </section>
      </div>
      <section className={`col-md-12 ${styles.introSection} `} style={{ padding: '0px' }}>
        <div className={`col-md-5 ${styles.yardImgDiv} `} style={{ padding: '0px' }}>
          <article className={`${styles.yardImg} `}>
            <Image
              className={`${styles.img}`}
              alt="Next.js logo"
              src="/images/PHOTO-2021-01-31-01-04-34.jpg"
              width={1900}
              height={560}
    
            />
          </article>
        </div>
        <div className="col-md-7" style={{ display: 'table' }}>
          <div className={`${styles.introDescription} `}>
            <span className={`${styles.verticalText} `}>  {t('yard_utilities')}</span>
            <aside className={`${styles.yardDesc} `}>
              <h1>{t('our_yard')}</h1>
              <div dangerouslySetInnerHTML={{ __html: ourYardText }}></div>
            </aside>
            <aside className={`${styles.yardUtilities} `}>
              <h1>{t('yard_utilities')}</h1>
              <div dangerouslySetInnerHTML={{ __html: yardUtilitiesText }}></div>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <Image 
          alt="Next.js logo" 
          className={`${styles.imgFluid} ${styles.fabricFullImg} ${styles.img}`} 
          src="/images/EAA LDA D (4 de 9).jpg" 
          width={1900}
          height={600}
        />
      </section>
      <section className={`col-md-12 ${styles.about}`}>
        <div className={`${styles.aboutDiv}`}>
          <aside className={`${styles.aboutAside}`}>
            <div className="row mt-3">
              {/* <section className={`col-md-5 ${styles.introSectionLine}`}></section> */}
              <section className="col-md-12" style={{ textAlign: 'center' }}>
                <div className={`${styles.aboutAsideDescription}`}>
                  <h1 className={`${styles.bannerTittle}`}>{t('about_us')}</h1>
                </div>
              </section>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1 mt-3">
                <section className={`col-md-5 ${styles.introSectionLine}`}>
                  <div className={`${styles.intro}`}>
                    <div className={`${styles.introText}`}>
                      <div className="separator">
                        <div className="line"></div>
                        <h6>{t('vision_values_and_mission')}</h6>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="col-md-7" style={{ float: 'right' }}>
                  <div className="description">
                    {missionVisionText}
                  </div>
                </section>
              </div>
            </div>
            <div className={`row mt-3 ${styles.aboutIcons}`}>
              <section className="col-md-10 col-md-offset-1">
                <div className="col-md-4">
                  <div className="icon">
                    <i className="fas fa-eye" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    <h4>{t('vision')}</h4>
                    <p>
                      To be recognized for excellence, quality and rigorin the projects carried out
                      and for the fulfillment of Social Responsibilities.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon">
                    <i className="fas fa-infinity" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    <h4>{t('values')}</h4>
                    <p><b>Human</b></p>
                    <p>
                      Respect, Integrity, Loyalty, Discretion, Receptiveness, Ambition and Dedication;
                    </p>
                    <p><b>Social</b></p>
                    <p>
                      Ethics, Responsibility, Solidarity and Culture Development;
                    </p>
                    <p><b>Business</b></p>
                    <p>
                      Rigor, Competence, Professionalism, Efficiency, Innovation and Transparency.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon">
                    <i className="fas fa-compass" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    <h4>{t('mission')}</h4>
                    <p>
                      Deliver projects safely, with quality, on time and on budget,
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </section>
      <section className={`col-md-12 ${styles.eeaMarcadeagua}`}>
        <Image 
          alt="Next.js logo" 
          src="/images/white_logo.png" 
          width={1920}
          height={600}

        />
      </section>
    </>
  );
}


// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }

export default Home;