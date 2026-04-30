"use client"
export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("Message envoyé !")
    }
    return (
        <>
            <section id="contact" className="contact section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>
                        Prêtes à passer &agrave; l'action? Contactez-nous pour découvrir
                        comment structurer vos compétences, activer vos opportunités et
                        construire une trajectoire durable.
                    </p>
                </div>


                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-5">
                            <div className="info-wrap">
                                <div
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Addresse</h3>
                                        <p>Boston, Massachussets | Gona&iuml;ves, Ha&iuml;ti</p>
                                    </div>
                                </div>


                                <div
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Appelez</h3>
                                        <p>
                                            <a href="tel:+17747895263">+1 (774) 789 52-63</a> |
                                            <a href="tel:+50940637986">+(509) 4063-7986</a>
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Laissez un e-mail</h3>
                                        <p>
                                            <a href="mailto:infos@levelaragroup.com"
                                            >infos@levelaragroup.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <i className="bi bi-whatsapp"></i>
                                    <div>
                                        <h3>Contactez via Whatsapp</h3>
                                        <p>
                                            <a
                                                href="https://wa.me/+17747895263?text=Bonjour%20!%20Comment%20puis%20je%20vous%20rejoindre%20%3F"
                                                target="_blank"
                                            >Cliquez ici
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps?q=150%20Grossman%20Drive%20Suite%20205%20Braintree%20MA%2002184&z=16&output=embed"
                                    style={{ border: 0, width: "100%", height: "270px" }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} className="php-email-form">

                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <label htmlFor="name-field" className="pb-2">Votre Nom</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name-field"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email-field" className="pb-2">Votre Pr&eacute;nom</label>
                                        <input
                                            type="text"
                                            name="prenom"
                                            id="prenom-field"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="email-field" className="pb-2">Votre Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email-field"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="subject-field" className="pb-2">Sujet</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject-field"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="message-field" className="pb-2">Message</label>
                                        <textarea
                                            name="message"
                                            id="message-field"
                                            className="form-control"
                                            rows={5}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary">
                                            Envoyer un message
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}