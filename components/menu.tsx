// import Image from "next/image";
import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-white navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </button>
                        <Link className="navbar-brand" href="/" style={{ width: '181px' }}>
                            <img alt="logo-nav" className="logo-nav" src="/images/black_logo.png" />
                        </Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse menu-options">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact us
                                </Link>
                            </li>
                            {/* <Link className="active"  href="/" passHref>
                            Home
                        </Link>                                                                                     </Link> */}
                        </ul>
                        <div className="navbar-right">
                            <i className="fas fa-globe default-search" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}