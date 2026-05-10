"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon({
    title = "Bientôt disponible",
    message = "Nous travaillons actuellement sur cette section afin de vous offrir une meilleure expérience. Revenez très bientôt.",
}) {
    return (
        <section
            className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden bg-light"
            style={{
                background:
                    "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ffffff 100%)",
            }}
        >
            {/* Background Glow */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background:
                        "radial-gradient(circle at top right, rgba(99,102,241,0.15), transparent 35%)",
                    zIndex: 0,
                }}
            ></div>

            <div
                className="container position-relative"
                style={{ zIndex: 2, maxWidth: "750px" }}
            >
                <div
                    className="bg-white shadow-lg rounded-5 p-5 text-center border"
                    style={{
                        backdropFilter: "blur(10px)",
                    }}
                >
                    {/* Badge */}
                    <span className="badge bg-primary-subtle text-primary px-4 py-2 rounded-pill mb-4 fw-semibold">
                        Nouvelle fonctionnalité
                    </span>

                    {/* Illustration */}
                    {/* <div className="mb-4">
            <Image
              src="/coming-soon.png"
              alt="Coming Soon"
              width={260}
              height={260}
              className="img-fluid"
              priority
            />
          </div> */}

                    {/* Title */}
                    <h1
                        className="fw-bold mb-3"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            color: "#111827",
                        }}
                    >
                        {title}
                    </h1>

                    {/* Message */}
                    <p
                        className="text-secondary mx-auto mb-4"
                        style={{
                            maxWidth: "550px",
                            fontSize: "1.05rem",
                            lineHeight: "1.8",
                        }}
                    >
                        {message}
                    </p>

                    {/* Loading animation */}
                    <div className="d-flex justify-content-center mb-4">
                        <div
                            className="spinner-border text-primary"
                            style={{ width: "3rem", height: "3rem" }}
                            role="status"
                        >
                            <span className="visually-hidden">Chargement...</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                        <Link
                            href="/"
                            className="btn btn-primary px-4 py-3 rounded-pill fw-semibold shadow-sm"
                        >
                            Retour à l'accueil
                        </Link>

                        <Link
                            href="/contact"
                            className="btn btn-outline-dark px-4 py-3 rounded-pill fw-semibold"
                        >
                            Être notifié
                        </Link>
                    </div>

                    {/* Footer text */}
                    <div className="mt-5 text-muted small">
                        © {new Date().getFullYear()} LevelARA Career — Tous droits réservés
                    </div>
                </div>
            </div>
        </section>
    );
}