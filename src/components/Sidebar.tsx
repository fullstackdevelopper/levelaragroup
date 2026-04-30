import Image from "next/image"
import Link from "next/link"
import Carriere from "@/app/contact/page"

export default function Header() {
    return (
        <>
            <header id="header" className="header dark-background d-flex flex-column">
                <i className="header-toggle d-xl-none bi bi-list"></i>

                <div className="profile-img">
                    <Image
                        src="/img/LevelARA-Group-Main-Icon (2).jpg"
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
                    <h1 className="sitename">LevelARA Group</h1>
                </a>

                <div className="social-links text-center">
                    <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <Link href="/" className="active"
                            ><i className="bi bi-house navicon"></i>Acceuil
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about"
                            ><i className="bi bi-info-circle me-2"></i> &Agrave; propos
                            </Link>
                        </li>

                        <li>
                            <Link href="/#portfolio"
                            ><i className="bi bi-card-list me-2"></i>R&eacute;sum&eacute;
                            </Link>
                        </li>

                        <li>
                            <Link href="/carriere">
                                <i className="bi bi-mortarboard navicon"></i>Carri&egrave;re
                            </Link>
                        </li>

                        <li>
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