// import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <img className="logo-footer" src="/images/white_logo.png" />
            <div className="footer-section col-md-12">
                <div className="col-md-12 text-center">
                    <a className="half-a-border-on-bottom tittle" href="/contact"> CONTACT US </a>
                </div>
            </div>
            <div className="col-md-12 copyright-section">
                <p className="copyright"> ©2021 OBRA PRIMATA DESIGN · Made in <i className="fas fa-sun" style={{ marginLeft: '5px', marginRight: '5px' }} aria-hidden="true"></i> ANGOLA</p>
            </div>
        </footer>
    )
}