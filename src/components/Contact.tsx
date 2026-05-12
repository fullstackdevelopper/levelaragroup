"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Contact() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const formRef = useRef<HTMLFormElement>(null)
    const router = useRouter()

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault()

        setLoading(true)
        setError("")

        const form = e.currentTarget

        const formData = {
            nom: (
                form.elements.namedItem("name") as HTMLInputElement
            ).value,

            prenom: (
                form.elements.namedItem("prenom") as HTMLInputElement
            ).value,

            email: (
                form.elements.namedItem("email") as HTMLInputElement
            ).value,

            sujet: (
                form.elements.namedItem("subject") as HTMLInputElement
            ).value,

            message: (
                form.elements.namedItem("message") as HTMLTextAreaElement
            ).value,
        }

        try {

            const response = await fetch(
                "/api/contact-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            )

            const data = await response.json()

            console.log(data)

            if (!response.ok) {

                setError(
                    data.error ||
                    "Une erreur est survenue."
                )

                return
            }

            form.reset()

            const successToast =
                document.getElementById("successToast")

            if (successToast) {

                const bootstrap =
                    await import("bootstrap")

                const toast =
                    new bootstrap.Toast(successToast, {
                        delay: 3000,
                        autohide: true,
                    })

                toast.show()

                setTimeout(() => {
                    router.push("/")
                }, 3000)
            }

        } catch (err) {

            console.error(err)

            setError(
                "Une erreur serveur est survenue."
            )

        } finally {

            setLoading(false)
        }
    }

    return (
        <section
            id="contact"
            className="contact section"
        >

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >

                <div className="row gy-4">

                    {/* Informations */}
                    <div className="col-lg-5">

                        <div className="info-wrap">

                            {/* Adresse */}
                            <div
                                className="info-item d-flex"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >

                                <i className="bi bi-geo-alt flex-shrink-0"></i>

                                <div>

                                    <h3>Adresse</h3>

                                    <p>
                                        Boston, Massachusetts |
                                        Gonaïves, Haïti
                                    </p>

                                </div>

                            </div>

                            {/* Téléphone */}
                            <div
                                className="info-item d-flex"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >

                                <i className="bi bi-telephone flex-shrink-0"></i>

                                <div>

                                    <h3>Appelez</h3>

                                    <p>

                                        <a href="tel:+17747895263">
                                            +1 (774) 789-5263
                                        </a>

                                        {" | "}

                                        <a href="tel:+50940637986">
                                            +(509) 4063-7986
                                        </a>

                                    </p>

                                </div>

                            </div>

                            {/* Email */}
                            <div
                                className="info-item d-flex"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >

                                <i className="bi bi-envelope flex-shrink-0"></i>

                                <div>

                                    <h3>Laissez un e-mail</h3>

                                    <p>

                                        <a href="mailto:infos@levelaragroup.com">
                                            infos@levelaragroup.com
                                        </a>

                                    </p>

                                </div>

                            </div>

                            {/* WhatsApp */}
                            <div
                                className="info-item d-flex"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >

                                <i className="bi bi-whatsapp flex-shrink-0"></i>

                                <div>

                                    <h3>
                                        Contactez via WhatsApp
                                    </h3>

                                    <p>

                                        <a
                                            href="https://wa.me/17747895263?text=Bonjour%20!%20Je%20souhaite%20vous%20contacter."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Cliquez ici
                                        </a>

                                    </p>

                                </div>

                            </div>

                            {/* Carte */}
                            <iframe
                                src="https://www.google.com/maps?q=150%20Grossman%20Drive%20Suite%20205%20Braintree%20MA%2002184&z=16&output=embed"
                                style={{
                                    border: 0,
                                    width: "100%",
                                    height: "270px",
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />

                        </div>

                    </div>

                    {/* Formulaire */}
                    <div className="col-lg-7">

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="php-email-form"
                        >

                            <div className="row gy-4">

                                {/* Nom */}
                                <div className="col-md-6">

                                    <label
                                        htmlFor="name-field"
                                        className="pb-2"
                                    >
                                        Votre Nom
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        id="name-field"
                                        className="form-control"
                                        required
                                    />

                                </div>

                                {/* Prénom */}
                                <div className="col-md-6">

                                    <label
                                        htmlFor="prenom-field"
                                        className="pb-2"
                                    >
                                        Votre Prénom
                                    </label>

                                    <input
                                        type="text"
                                        name="prenom"
                                        id="prenom-field"
                                        className="form-control"
                                        required
                                    />

                                </div>

                                {/* Email */}
                                <div className="col-md-12">

                                    <label
                                        htmlFor="email-field"
                                        className="pb-2"
                                    >
                                        Votre E-mail
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        id="email-field"
                                        className="form-control"
                                        required
                                    />

                                </div>

                                {/* Sujet */}
                                <div className="col-md-12">

                                    <label
                                        htmlFor="subject-field"
                                        className="pb-2"
                                    >
                                        Sujet
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject-field"
                                        className="form-control"
                                        required
                                    />

                                </div>

                                {/* Message */}
                                <div className="col-md-12">

                                    <label
                                        htmlFor="message-field"
                                        className="pb-2"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        name="message"
                                        id="message-field"
                                        className="form-control"
                                        rows={6}
                                        required
                                    />

                                </div>

                                {/* Error */}
                                {
                                    error && (
                                        <div className="col-md-12">

                                            <div className="alert alert-danger">
                                                {error}
                                            </div>

                                        </div>
                                    )
                                }

                                {/* Bouton */}
                                <div className="col-md-12 text-center">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >

                                        {
                                            loading
                                                ? "Envoi en cours..."
                                                : "Envoyer un message"
                                        }

                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

            {/* Toast Success */}
            <div className="toast-container position-fixed top-0 end-0 p-3">

                <div
                    id="successToast"
                    className="toast align-items-center text-bg-success border-0 fade"
                    role="alert"
                >

                    <div className="d-flex">

                        <div className="toast-body">

                            <strong>
                                Merci pour votre message !
                            </strong>

                            <br />

                            ✅ Nous vous répondrons bientôt.

                        </div>

                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                        ></button>

                    </div>

                </div>

            </div>

        </section>
    )
}