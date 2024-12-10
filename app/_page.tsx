
"use client"
import Image from "next/image";
import styles from '@/public/styles/home.module.css';
import SocialIconsBanner from "@/app/components/socialIconsBanner";
// import { useTranslation } from 'next-i18next';

const Home: React.FC = () => {
  // const { t } = useTranslation('common');

  const introText = `The Estaleiro Atlantico do Amboim (EAA), is a shipyard <br/>
    and energy industry in Angola.
    The manufacturing yard is <br/>
    located at Praia do Kissonde, Porto Amboim, Kwanza-Sul,<br/>
    Angola. Specializes in the construction of underwater <br/>
    structures and the manufacture of support equipment for the oil and gas industry.`;

  const yardUtilitiesText = `<p>
    Offices (1050 m2) <br/>
    Restaurant (300 seats) <br/>
    Own satellite connection <br/>
    Fuel storage (60m3) <br/>
    Fuel purification unit <br/>
    E-power plant (8mW) <br/>
    2x RO-water plant (160m3/d) <br/>
    Anaerobe sewer treatment plant <br/>
    Medical facilities with yard hospital (2 beds) <br/>
    Ambulance <br/>
    Fire fighting truck <br/>
    EAATC (Estaleiro Atlântico do Amboim Training <br/
    Centre) capacity 40 trainees <br/>
    EAASC (Estaleiro Atlântico do Amboim Safety Centre) <br/>
    capacity 16 trainees <br/>
    Maintenance building<br/>
    Car wash area with oil/water separator
  </p>`
  return (
    <>
      <section className={`${styles.containerBanner} `}>
        <Image
          alt="Next.js logo"
          className={`${styles.banner}`}
          src="/images/EEA1.png"
          width={1900}
          height={800}
          // layout="responsive" 
        />

        <div className={`${styles.leftTittle}`}>
          <p className={`${styles.bannerTittle}`}>
            <span>ESTALEIRO</span>
            <span>ATLÂNTICO</span>
            <span>DO AMBOIM</span>
          </p>
          <i className="fas fa-play-circle" aria-hidden="true"></i>
          <p style={{ display: 'inline-block', paddingLeft: '2%', fontWeight: '500' }}> FIND OUT MORE</p>
        </div>
        <i className="fas fa-chevron-left left" aria-hidden="true"></i>
        <div className="arrows">
          <div className="col-md-2 arrow-p">
            <p>Introduction <br/> to EAA</p>
          </div>
          <div className="col-md-4 arrow-p" style={{ marginLeft: '2%' }}>
            <p>General <br/> Yard Information</p>
          </div>
        </div>
        <i className="fas fa-chevron-right right" aria-hidden="true"></i>
        <SocialIconsBanner styles={styles} />
      </section>
      <div className="row mt-3">
        <section className={`col-md-5 ${styles.introSectionLine} `}>
          <div className={`${styles.intro} `}>
            <div className={`${styles.introText} `}>
              <div className="separator">
                <div className="line"></div>
                <h6>intro</h6>
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
              alt="Next.js logo"
              src="/images/sections/home-section-4.png"
              width={1900}
              height={560}
              // layout="responsive"
            />
          </article>
        </div>
        <div className="col-md-7" style={{ display: 'table' }}>
          <div className={`${styles.introDescription} `}>
            <span className={`${styles.verticalText} `}> Yard utilities</span>
            <aside className={`${styles.yardDesc} `}>
              <h1>Our yard </h1>
              <p>
                150.000 m2 (15 ha), loadbearing 90 t/m2 <br/>
                Direct acess to open sea<br/>
                Quay 250m, 10.6m water depth<br/>
                Quay load 5 t/m2 - 10 t/m2<br/>
                Breakwater protection <br/>
                Connected by road transport to Luanda
              </p>
            </aside>
            <aside className={`${styles.yardUtilities} `}>
              <h1> Yard <br/> utilities</h1>
              <div dangerouslySetInnerHTML={{ __html: yardUtilitiesText }}></div>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <Image 
          alt="Next.js logo" 
          className={`${styles.imgFluid} ${styles.fabricFullImg}`} 
          src="/images/sections/home-full-section-2.png" 
          width={180}
          height={38}
          // layout="responsive"
        />
      </section>
      <section className={`col-md-12 ${styles.about}`}>
        <div className={`${styles.aboutDiv}`}>
          <aside className={`${styles.aboutAside}`}>
            <div className="row mt-3">
              <section className={`col-md-5 ${styles.introSectionLine}`}></section>
              <section className="col-md-7" style={{ float: 'right' }}>
                <div className="description">
                  <aside>
                    <h1 className="">ABOUT US</h1>
                  </aside>
                </div>
              </section>
            </div>
            <div className="row mt-3">
              <section className={`col-md-5 ${styles.introSectionLine}`}>
                <div className={`${styles.intro}`}>
                  <div className={`${styles.introText}`}>
                    <div className="separator">
                      <div className="line"></div>
                      <h6>VISION, VALUES AND MISSION</h6>
                    </div>
                  </div>
                </div>
              </section>
              <section className="col-md-7" style={{ float: 'right' }}>
                <div className="description">
                  <p>
                    The Vision, Values ​​and Mission of EAA, LDA materialize the company’s ambition to
                    be a reference in society, contributing decisively to the development of the oil sector and other markets.
                  </p>
                </div>
              </section>
            </div>
            <div className={`row mt-3 ${styles.aboutIcons}`}>
              <section className="col-md-10 col-md-offset-1">
                <div className="col-md-4">
                  <div className="icon">
                    <i className="fas fa-eye" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    <h4>Vision</h4>
                    <p>
                      To be recognized for<br />
                      excellence, quality and rigor<br />
                      in the projects carried out
                      and for the fulfillment of<br />
                      Social Responsibilities.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon">
                    <i className="fas fa-infinity" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    <h4>Values</h4>
                    <p><b>Human</b></p>
                    <p>
                      Respect, Integrity, Loyalty,<br />
                      Discretion, Receptiveness,<br />
                      Ambition and Dedication;
                    </p>
                    <p><b>Social</b></p>
                    <p>
                      Ethics, Responsibility,<br />
                      Solidarity and Culture Development;
                    </p>
                    <p><b>Business</b></p>
                    <p>
                      Rigor, Competence,<br />
                      Professionalism, Efficiency,<br />
                      Innovation and Transparency.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon">
                    <i className="fas fa-compass" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    <h4>Mission</h4>
                    <p>
                      Deliver projects safely,<br />
                      with quality, on time and on<br />
                      budget,
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
          // layout="responsive"
        />
      </section>
    </>
  );
}

export default Home;