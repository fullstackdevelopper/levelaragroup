export default function footer() {
    return (
        <>
            <footer id="footer" className="footer position-relative light-background">
                <div className="container">

                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center text-center gap-3">

                        <div className="copyright">
                            <p className="mb-0">
                                © <span>Copyright</span>
                                <strong className="px-1 sitename">LevelARA Group</strong>
                                <span>Tous droits réservés</span>
                            </p>
                        </div>
                        <span className="d-none d-sm-inline text-muted mx-2">|</span>
                        <div className="credits">
                            Designed by{" "}
                            <a href="https://www.levelaraproacademy.com/">
                                LevelARA Pro Academy
                            </a>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}