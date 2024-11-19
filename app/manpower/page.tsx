import React from "react";
import "@/public/styles/manpower.css"; // Optional CSS file for styling
import Manpower from "@/components/manpower";

const ManpowerAndTraining: React.FC = () => {
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
      <section className="container-banner">
        <img className="banner" src="/images/header/manpower.png" alt="Manpower and Training" />

        <div className="left-tittle">
          <p className="banner-tittle">
            <span>MANPOWER AND </span>
            <span>TRAINING</span>
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-play-circle" aria-hidden="true"></i>
            <p
              style={{
                display: "inline-block",
                paddingLeft: "2%",
                fontWeight: 500,
              }}
            >
              FIND OUT MORE
            </p>
          </div>
        </div>

        <div className="arrows">
          <div className="col-md-4 arrow-p" style={{ marginLeft: "2%" }}>
            <p>Manpower and training</p>
          </div>
        </div>
        <i className="fas fa-chevron-right right" aria-hidden="true"></i>

        <div className="social-icons-banner">
          <i className="fab fa-facebook-f icons-banner padding-14" aria-hidden="true"></i>
          <i className="fab fa-whatsapp icons-banner" aria-hidden="true"></i>
        </div>
      </section>

      {/* Intro Section */}
      <section
        className="col-md-12"
        style={{
          padding: "0px",
          marginBottom: "12%",
          marginTop: "5%",
          height: "256px",
        }}
      >
        <section className="col-md-6 intro">
          <div className="intro-text">
            <div className="separator">
              <div className="line"></div>
              <h6>manpower and training</h6>
            </div>
          </div>
        </section>

        <section className="col-md-6 intro-section">
          <div className="intro-description">
            <div style={{ fontWeight: 400, color: "#C4C4C4" }} 
              dangerouslySetInnerHTML={{ __html: manpowerText }}
            />
          </div>
        </section>
      </section>

      {/* Card Section */}
      <Manpower />
    </>
  );
};

export default ManpowerAndTraining;
