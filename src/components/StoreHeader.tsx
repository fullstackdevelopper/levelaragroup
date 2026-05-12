"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header
            id="header"
            className={`header store-header d-flex flex-column flex-xl-row align-items-center justify-content-xl-between gap-xl-5 px-xl-4 ${menuOpen ? "header-show" : ""
                }`}
        >

            {/* Hamburger */}
            <i
                className={`header-toggle d-xl-none bi ${menuOpen ? "bi-x" : "bi-list"
                    }`}
                style={{
                    backgroundColor: "#114c5a",
                    color: "white"
                }}
                onClick={() => setMenuOpen(!menuOpen)}
            ></i>

            {/* Logo + titre */}
            <div className="brand-container d-flex flex-column flex-xl-row align-items-center gap-2">
                <div className="profile-img m-0">
                    <Image
                        src="/img/LevelARA IM Icon White BG.jpg"
                        alt="Logo"
                        className="img-fluid rounded-circle"
                        width={70}
                        height={70}
                    />
                </div>

                <h1 className="sitename m-0 fw-bold fs-5">
                    LevelARA Invest-Market
                </h1>
            </div>

            {/* Navigation */}
            <nav
                id="navmenu"
                className={`navmenu ${menuOpen ? "d-block" : "d-none"} d-xl-block`}
            >
                <ul className="d-flex flex-column flex-xl-row align-items-center m-0 p-0">
                    <li className="mx-xl-2 my-2 my-xl-0 fw-bold">
                        <Link href="/" className="active">
                            <i className="bi bi-house navicon"></i>
                            LevelARA Group
                        </Link>
                    </li>

                    <li className="mx-xl-2 my-2 my-xl-0">
                        <Link href="/carriere">
                            <i className="bi bi-graph-up me-2"></i>
                            Carri&egrave;re
                        </Link>
                    </li>

                    <li className="mx-xl-2 my-2 my-xl-0">
                        <Link href="/contact">
                            <i className="bi bi-envelope navicon"></i>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}