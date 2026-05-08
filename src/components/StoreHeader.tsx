import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <header id="header"
                className="header store-header d-flex flex-column flex-xl-row align-items-center justify-content-xl-between"
            >
                <i className="header-toggle d-xl-none bi bi-list"></i>

                <div className="profile-img">
                    <Image
                        src="/img/LevelARA IM Icon White BG.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                        width={200}
                        height={200}
                    />
                </div>

                <a
                    href="index.html"
                    className="logo d-flex align-items-center justify-content-center"
                >
                    <h1 className="sitename">LevelARA Invest-Market</h1>
                </a>

                {/* <div className="social-links text-center">
                    <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div> */}

                <nav id="navmenu" className="navmenu">
                    <ul className="d-flex flex-column flex-xl-row align-items-center m-0 ">
                        <li className="mx-xl-3 my-2 my-xl-0 fw-bold">
                            <Link href="/" className="active"
                            ><i className="bi bi-house navicon"></i>LevelARA Group
                            </Link>
                        </li>
                        {/* <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/#about"
                            ><i className="bi bi-info-circle me-2"></i> &Agrave; propos
                            </Link>
                        </li> */}
                        {/* 
                        <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/#portfolio"
                            ><i className="bi bi-card-list me-2"></i>R&eacute;sum&eacute;
                            </Link>
                        </li> */}

                        <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/carriere">
                                <i className="bi bi-graph-up me-2"></i>Carri&egrave;re
                            </Link>
                        </li>

                        <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/contact"
                            ><i className="bi bi-envelope navicon"></i> Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}