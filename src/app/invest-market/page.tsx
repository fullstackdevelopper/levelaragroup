"use client"
import { products } from "../data/produits"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Store() {
    const [activeFilter, setActiveFilter] = useState("all");

    const portfolioItems = products

    const filteredItems =
        activeFilter === "all"
            ? portfolioItems
            : portfolioItems.filter(
                (item) => item.category === activeFilter
            )

    return (
        <section
            id="portfolio"
            className="py-5 bg-light"
        >

            <div className="container">

                {/* TITLE */}
                <div className="text-center mb-5">

                    <h2 className="fw-bold display-5 fs-4 invest-title">
                        Achetez • Vendez • Investissez
                    </h2>

                    <p className="text-muted mx-auto">
                        Découvrez une nouvelle expérience du commerce digital avec LevelARA Invest-Market.
                        Achetez des produits de qualité, vendez vos offres au bon public et explorez des opportunités
                        d’investissement dans un espace moderne, sécurisé et pensé pour votre croissance.
                    </p>

                </div>

                {/* FILTERS */}
                {/* FILTERS */}
                <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">

                    <button
                        onClick={() => setActiveFilter("all")}
                        className={`btn rounded-pill px-4 ${activeFilter === "all"
                            ? "btn-dark"
                            : "btn-outline-dark"
                            }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setActiveFilter("filter-app")}
                        className={`btn rounded-pill px-4 ${activeFilter === "filter-app"
                            ? "btn-dark"
                            : "btn-outline-dark"
                            }`}
                    >
                        App
                    </button>

                    <button
                        onClick={() => setActiveFilter("filter-product")}
                        className={`btn rounded-pill px-4 ${activeFilter === "filter-product"
                            ? "btn-dark"
                            : "btn-outline-dark"
                            }`}
                    >
                        Product
                    </button>

                    <button
                        onClick={() => setActiveFilter("filter-branding")}
                        className={`btn rounded-pill px-4 ${activeFilter === "filter-branding"
                            ? "btn-dark"
                            : "btn-outline-dark"
                            }`}
                    >
                        Branding
                    </button>

                    <button
                        onClick={() => setActiveFilter("filter-books")}
                        className={`btn rounded-pill px-4 ${activeFilter === "filter-books"
                            ? "btn-dark"
                            : "btn-outline-dark"
                            }`}
                    >
                        Books
                    </button>

                </div>

                {/* GRID */}
                <div className="row g-4">

                    {filteredItems.map((item, index) => (

                        <div
                            key={index}
                            className="col-lg-4 col-md-6"
                        >

                            <div className="portfolio-card position-relative overflow-hidden rounded-4 shadow-sm">

                                {/* IMAGE */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="img-fluid portfolio-image"
                                />

                                {/* OVERLAY */}
                                <div className="portfolio-overlay d-flex flex-column justify-content-end">

                                    <div>

                                        {/* CATEGORY */}
                                        <span className="text-light small text-uppercase">
                                            {item.categoryLabel}
                                        </span>

                                        {/* TITLE */}
                                        <h4 className="text-white fw-bold mb-2">
                                            {item.title}
                                        </h4>

                                        {/* PRICE */}
                                        <div className="d-flex align-items-center gap-2 mb-3">

                                            <span className="text-white fw-bold fs-5">
                                                ${item.price}
                                            </span>

                                            {item.oldPrice && (
                                                <span className="text-light text-decoration-line-through small">
                                                    ${item.oldPrice}
                                                </span>
                                            )}

                                            {item.discount && (
                                                <span className="badge bg-danger">
                                                    {item.discount}
                                                </span>
                                            )}

                                        </div>

                                        {/* ACTIONS */}
                                        <div className="d-flex gap-3">

                                            <a
                                                href={item.image}
                                                className="action-btn"
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>

                                            <Link
                                                href={`/invest-market/${item.slug}`}
                                                className="action-btn"
                                            >
                                                <i className="bi bi-arrow-up-right"></i>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    )
}