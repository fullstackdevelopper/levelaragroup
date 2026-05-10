export default function footer() {
    return (
        <>
            <footer id="footer" className="footer position-relative light-background">
                <div className="container">

                    <div className="footer-container">
                        <div className="social-links text-center">
                            <a href="#" className="twitter mx-2">
                                <i className="bi bi-twitter-x fs-4"></i>
                            </a>

                            <a href="#" className="facebook mx-2">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>

                            <a href="#" className="instagram mx-2">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>

                            <a href="#" className="google-plus mx-2">
                                <i className="bi bi-skype fs-4"></i>
                            </a>

                            <a href="#" className="linkedin mx-2">
                                <i className="bi bi-linkedin fs-4"></i>
                            </a>

                            <hr className="hr-footer" />
                        </div>
                        <div className="copyright mt-2">

                            <p className="mb-0 text-center footer-text px-1">
                                © <span>Copyright</span>

                                <strong className="px-1">
                                    LevelARA Invest-Market - {new Date().getFullYear()}
                                </strong>

                                <span>Tous droits réservés</span>
                            </p>

                            {/* Adresse */}
                            <div className="d-flex justify-content-center align-items-start gap-2 mt-3 px-3 text-center">

                                {/* Même style/couleur que les autres icônes */}
                                <a href="#" className="mx-1">
                                    <i className="bi bi-geo-alt-fill fs-4"></i>
                                </a>

                                <p className="mb-0 small">
                                    150 Grossman Drive, Suite 205 <br />
                                    Braintree, MA 02184 <br />
                                    United States
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}