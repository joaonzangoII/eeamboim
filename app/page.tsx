import Image from "next/image";
import "@/public/styles/home.css"; // Optional CSS file for styling
                                                                                       

export default function Home() {
  const introText = `The Estaleiro Atlantico do Amboim (EAA),
    is a <br id="my-line-break" />
    shipyard <br id="my-line-break" />
    and energy industry in Angola.
    The manufacturing<br id="my-line-break" />
    yard is <br id="my-line-break" />
    located at Praia do Kissonde, Porto Amboim, Kwanza-<br id="my-line-break" />
    Sul,<br id="my-line-break" />
    Angola. Specializes in the construction
    of underwater <br id="my-line-break" />
    structures and the manufacture of support <br id="my-line-break" />
    equipment for<br id="my-line-break" />
    the oil and gas industry.`;

  const yardUtilitiesText = `<p>
    Offices (1050 m2) <br id="my-line-break" />
    Restaurant (300 seats) <br id="my-line-break" />
    Own satellite connection <br id="my-line-break" />
    Fuel storage (60m3) <br id="my-line-break" />
    Fuel purification unit <br id="my-line-break" />
    E-power plant (8mW) <br id="my-line-break" />
    2x RO-water plant (160m3/d) <br id="my-line-break" />
    Anaerobe sewer treatment plant <br id="my-line-break" />
    Medical facilities with yard hospital (2 beds) <br id="my-line-break" />
    Ambulance <br id="my-line-break" />
    Fire fighting truck <br id="my-line-break" />
    EAATC (Estaleiro Atlântico do Amboim Training <br id="my-line-break" /
    Centre) capacity 40 trainees <br id="my-line-break" />
    EAASC (Estaleiro Atlântico do Amboim Safety Centre) <br id="my-line-break" />
    capacity 16 trainees <br id="my-line-break" />
    Maintenance building<br id="my-line-break" />
    Car wash area with oil/water separator
  </p>`
  return (
    <>
      <section className="container-banner ">
        <Image
          alt="Next.js logo"
          className="banner"
          src="/images/EEA1.png"
          width={1900}
          height={800}
          // layout="responsive" 
        />
        <div className="left-tittle">
          <p className="banner-tittle">
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
            <p>Introduction <br id="my-line-break" /> to EAA</p>
          </div>
          <div className="col-md-4 arrow-p" style={{ marginLeft: '2%' }}>
            <p>General <br id="my-line-break" /> Yard Information</p>
          </div>
        </div>
        <i className="  fas fa-chevron-right right" aria-hidden="true"></i>
        <div className="social-icons-banner">
          <i className="fab fa-facebook-f icons-banner padding-14" aria-hidden="true"></i>
          <i className="fab fa-whatsapp icons-banner" aria-hidden="true"></i>
        </div>
      </section>
      <div className="row mt-3">
        <section className="col-md-5 intro-section-line">
          <div className="intro">
            <div className="intro-text">
              <div className="separator">
                <div className="line"></div>
                <h6>intro</h6>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-7" style={{ float: 'right' }}>
          <div className="intro-texto" dangerouslySetInnerHTML={{ __html: introText }}></div>
        </section>
      </div>
      <section className="col-md-12 intro-section" style={{ padding: '0px' }}>
        <div className="col-md-5 yard-img-div" style={{ padding: '0px' }}>
          <article className="yard-img">
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
          <div className="intro-description">
            <span className="vertical-text"> Yard utilities</span>
            <aside className="yard-desc">
              <h1>Our yard </h1>
              <p>
                150.000 m2 (15 ha), loadbearing 90 t/m2 <br id="my-line-break" />
                Direct acess to open sea<br id="my-line-break" />
                Quay 250m, 10.6m water depth<br id="my-line-break" />
                Quay load 5 t/m2 - 10 t/m2<br id="my-line-break" />
                Breakwater protection <br id="my-line-break" />
                Connected by road transport to Luanda
              </p>
            </aside>
            <aside className="yard-utilities">
              <h1> Yard <br id="my-line-break" /> utilities</h1>
              <div dangerouslySetInnerHTML={{ __html: yardUtilitiesText }}></div>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <Image 
          alt="Next.js logo" 
          className="img-fluid fabric-full-img" 
          src="/images/sections/home-full-section-2.png" 
          width={180}
          height={38}
          // layout="responsive"
        />
      </section>
      <section className="col-md-12 about">
        <div className="about-div">
          <aside className="about-aside">
            <div className="row mt-3">
              <section className="col-md-5 intro-section-line"></section>
              <section className="col-md-7" style={{ float: 'right' }}>
                <div className="description">
                  <aside>
                    <h1 className="">ABOUT US</h1>
                  </aside>
                </div>
              </section>
            </div>
            <div className="row mt-3">
              <section className="col-md-5 intro-section-line">
                <div className="intro">
                  <div className="intro-text">
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
            <div className="row mt-3 about-icons">
              <section className="col-md-10 col-md-offset-2">
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
      <section className="col-md-12 eea-marcadeagua">
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
