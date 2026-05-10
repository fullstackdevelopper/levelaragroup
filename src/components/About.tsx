import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <>
            <section id="about" className="about section">
                <div className="ms-3 section-title" data-aos="fade-up">
                    <h2 className="">À propos</h2>
                    <p className="text-start desc-princ">
                        Le potentiel humain est universel, mais les structures qui le
                        transforment en résultats réels sont rares. <strong>LevelARA Group</strong>, écosystème stratégique
                        dédié à la structuration des parcours éducatifs, professionnels et
                        patrimoniaux, avec une attention particulière portée à la jeunesse
                        et à la diaspora, connecte formation,
                        opportunités de carrière et d'investissement au sein d’un m&ecirc;me cadre
                        intégré de croissance durable.
                    </p>
                </div>
                <hr />
                <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <div>
                        <div className="container section-title" data-aos="fade-up">
                            <div className="col-12 col-md-12">
                                <h2 className="">Vision</h2>
                                <p className="text-start desc-princ">
                                    Devenir la référence institutionnelle dans la structuration des
                                    trajectoires de réussite et de création de valeur à long terme
                                    pour les individus et les communautés à fort potentiel.
                                </p>
                            </div>
                        </div>

                        <div className="container section-title" data-aos="fade-up">
                            <div className="col-12 col-md-12">
                                <h2 className="">Mission</h2>
                                <p className="text-start desc-princ">
                                    Concevoir et déployer un cadre systémique qui connecte
                                    l’éducation, l’accès aux opportunités professionnelles et la
                                    construction de patrimoine, afin de transformer le potentiel
                                    individuel en performance durable et mesurable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="img mt-lg-5">
                        <Image
                            src="/img/33.jpeg"
                            alt=""
                            className="img-fluid"
                            width={1000}
                            height={667}
                        />
                    </div>
                </div>
                <hr />
                <div className=" section-title" data-aos="fade-up">
                    <div className="col-12 col-md-12 ml-2 ps-3 pe-3">
                        <h2 className="">Mod&egrave;le</h2>
                        <p className="text-start">
                            La marque m&egrave;re incarne l'autorit&eacute; strat&eacute;gique
                            et la coh&eacute;rence globale, tandis que chaque filiale dispose
                            d'une identit&eacute; autonome dans un cadre structur&eacute;
                            commun. Un mod&egrave;le con&ccedil;u pour allier coh&eacute;rence,
                            sp&eacute;cialisation et scalabilit&eacute;.
                        </p>
                    </div>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <Image
                                src="/img/Pro_Academy.png"
                                className="img-fluid academy"
                                alt=""
                                width={1536}
                                height={1024}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                        <div className="col-lg-8 content explication-about">
                            <h2><strong>LevelARA Pro Academy</strong></h2>
                            <p className=" py-2">
                                LevelARA Pro Academy, Là où le potentiel
                                est structuré, discipliné et transformé en compétence
                                exploitable. Par ici, on ne suit pas seulement des cours. On structure, on d&eacute;veloppe et on mon&eacute;tise des
                                capacités qui produisent de la valeur. Toutes les formations sont
                                conçues pour être claire, pratique et directement applicable,
                                afin de permettre une montée en compétence rapide et
                                stratégique. C’est l’endroit où les valeurs r&eacute;elles produisent de l'argent, et où
                                les trajectoires commencent. <br /> <a href="https://www.levelaraproacademy.com/" target="_blank" rel="noopener noreferrer">Visiter LevelARA Pro Academy</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <Image
                                src="/img/Career().png"
                                className="img-fluid career"
                                alt=""
                                width={1536}
                                height={1024}
                            />
                        </div>
                        <div className="col-lg-8 content explication-about">
                            <h2><strong>LevelARA Career</strong></h2>
                            <p className="py-2">
                                LevelARA Career, le passage à l’action dans le milieu professionnel et le marché du traveil actuel.
                                Nous connectons les profils formés à des
                                opportunités réelles, nous les aidons &agrave; bien se positionner et &agrave; progresser dans leur milieu de travail.
                                Une carrière ne subit pas. Elle se construit, se développe et s’optimise. Avec nous, la vraie compétence et le bon profil trouveront leur trajectoire,
                                Avec nous, les professionnels immigr&eacute;s gagnent de l'argent via leurs comp&eacute;tences m&ecirc;me en dormant. Les jeune ambitieux commencent leur startup
                                avec nous, avec ou sans argent. <br />
                                <Link href="/bientot">Construire votre entreprise avec LevelARA Career</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img
                                src="img/invest market.jpg(1).jpeg"
                                className="img-fluid invest"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-8 content explication-about">
                            <h2><strong>LevelARA Invest-Market</strong></h2>
                            <p className=" py-2">
                                LevelARA Invest-Market, le niveau supérieur, le vrai marché financier. Nous connectons ressources,
                                projets et personnes au sein d'un m&ecirc;me système pour g&eacute;nerer une croissance &eacute;conomique durable.
                                C’est ici que la progression devient patrimoine. Ce n'est pas seulement faire de l'argent, c'est plut&ocirc;t faire travailler votre argent,
                                b&acirc;tir, construire votre entreprise avec nous, gagner de l'argent avec LevelARA. <br />
                                <Link href="/invest-market">Visiter LevelARA Invest-Market</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="portfolio resume-group section light-background">

                <div className="ms-3 me-3 section-title" data-aos="fade-up">
                    <h2>R&eacute;sum&eacute;</h2>
                    <p>
                        Vous n’êtes pas ici pour accumuler des connaissances inutiles. Vous
                        êtes ici pour acquérir des compétences qui produisent des résultats.
                        Chaque formation est conçue pour aller droit au but : <strong>comprendre rapidement</strong>, <strong>appliquer immédiatement</strong>, <strong>monétiser efficacement</strong>. <br />
                        <i className="bi bi-play-circle text-danger"></i> Prêtes à passer &agrave; l'action? <Link href="/contact">Contactez-nous</Link> pour découvrir
                        comment structurer vos compétences, activer vos opportunités et
                        construire une trajectoire durable ou <Link href="/carriere">rejoignez-nous </Link> pour d&eacute;sormais faire partie de l'aventure.
                    </p>
                </div>
            </section>
        </>
    )
}