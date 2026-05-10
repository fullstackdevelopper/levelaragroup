"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <header
                id="header"
                className={`header dark-background d-flex flex-column flex-xl-row align-items-center justify-content-center gap-xl-5 ${menuOpen ? "header-show" : ""
                    }`}
            >
                <i
                    className={`header-toggle d-xl-none bi bg-primary ${menuOpen ? "bi-x" : "bi-list"
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                ></i>

                {/* Logo + Titre */}
                <div className="brand-container">
                    <div className="profile-img m-0">
                        <Image
                            src="/img/LevelARA-Group-Main-Icon (2).jpg"
                            alt="Logo"
                            className="img-fluid rounded-circle"
                            width={60}
                            height={60}
                        />
                    </div>

                    <h1 className="sitename m-0 fw-bold">
                        LevelARA Group
                    </h1>
                </div>

                <nav id="navmenu" className="navmenu">
                    <ul className="d-flex flex-column flex-xl-row align-items-center m-0">
                        <li className="mx-xl-3 my-2 my-xl-0 fw-bold">
                            <Link href="/" className="active">
                                <i className="bi bi-house navicon"></i>
                                Acceuil
                            </Link>
                        </li>

                        <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/#about">
                                <i className="bi bi-info-circle me-2"></i>
                                À propos
                            </Link>
                        </li>

                        <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/#portfolio">
                                <i className="bi bi-card-list me-2"></i>
                                R&eacute;sum&eacute;
                            </Link>
                        </li>

                        <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/carriere">
                                <i className="bi bi-graph-up me-2"></i>
                                Carri&egrave;re
                            </Link>
                        </li>

                        <li className="mx-xl-3 my-2 my-xl-0">
                            <Link href="/contact">
                                <i className="bi bi-envelope navicon"></i>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}