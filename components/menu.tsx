import Image from "next/image";

export default function Menu() {
    return (
        <nav className="navbar navbar-white navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                        <i className="fas fa-bars" aria-hidden="true"></i>
                    </button>
                    <a className="navbar-brand" href="/" style={{ width: '181px' }}>
                        <img className="logo-nav" src="/images/black_logo.png" />
                    </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse menu-options">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/about"> About us</a></li>
                        <li><a href="/services"> Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    <div className="navbar-right">
                        <i className="fas fa-globe default-search" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}